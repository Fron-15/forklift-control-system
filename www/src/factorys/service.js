(function() {
    define(['app', 'md5'], function(app, md5) {
        app.factory('Service', Service);

        Service.$inject = ['$http', '$q', '$state', '$sessionStorage', 'Upload', 'backend', 'backendInterface', 'swal'];

        function Service($http, $q, $state, $sessionStorage, Upload, backend, backendInterface, swal) {
            //文件上传预设配置
            Upload.setDefaults({
                ngfAccept: "'.jpg,.png,.gif,.jpeg'",
                ngfDropDisabled: 'true',
                ngfPattern: '.jpg,.png,.gif,.jpeg',
                ngfMaxSize: '2MB'
            });

            //防止Service重复呼叫
            var servicePostCount = {};
            //后台接口错误码
            var backendErrorCodes = [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1009, 1100, 1101, 2001, 2100, 2101, 2900, 2901, 2902, 2990];

            var factory = {
                //获取Json资料
                getJson: getJson,
                //获取后台地址
                getUrl: getUrl,
                //调用后台接口
                post: post,
                //上传图片
                upload: upload
            };
            return factory;

            //获取Json资料
            function getJson(name, folder) {
                var deferred = $q.defer();

                $http.get('./json/' + (folder || '') + name + '.json').then(function(data) {
                    deferred.resolve(data.data);
                });

                return deferred.promise;
            }

            //获取后台地址
            function getUrl(ctrl, name) {
                var backendDetail = {},
                    interfaceName = ctrl + '/' + name;

                //获取服务信息
                angular.forEach(backendInterface, function(item, i) {
                    backendDetail = item.interfaces.indexOf(interfaceName) >= 0 ? item : backendDetail;
                });

                return (backendDetail.url || backend.url) + '/' + backendDetail.service + '/' + interfaceName;
            }

            //调用后台接口
            function post(ctrl, name, param) {
                var deferred = $q.defer(), 
                    interfaceName = ctrl + '/' + name;

                //同一个接口是否重复操作
                if (servicePostCount[interfaceName]) {
                    deferred.reject('Repeat Service Action, servicePostCount[' + interfaceName + ']: ' + servicePostCount[interfaceName]);
                } else {
                    //接口入参，签名字符，入参键值数组
                    var inParams = angular.copy(param || {}),
                        signValue = '',
                        inParamsKeys = Object.getOwnPropertyNames(inParams);

                    //表示该接口正在调用
                    servicePostCount[interfaceName] = 'posting';
                    //获取签名字符
                    angular.forEach(inParamsKeys.sort(), function(key, i) {
                        var keyValue = inParams[key];
                        signValue += keyValue !== undefined && keyValue !== null && keyValue !== '' && !angular.isArray(keyValue) ? key + '=' + keyValue + '&' : '';
                    });
                    //合并签名参数
                    inParams.sign = md5(signValue.substr(0, signValue.length - 1)).toUpperCase();

                    $http({
                        method: 'POST',
                        url: getUrl(ctrl, name), 
                        data: JSON.stringify(inParams),
                        headers: { 'Content-Type': 'application/json' },
                        timeout: 30000
                    }).then(function(data) {
                        //service返回数据
                        var result = data.data;
                        if (data.status === 200) {      //200代表接口调用成功
                            if (result && backendErrorCodes.indexOf(result.returnCode) >= 0) {     //数据库返回错误信息
                                errorHandle(interfaceName, result.message, result.returnCode);
                                deferred.reject('Error Services');
                            } else {    //成功返回数据
                                servicePostCount[interfaceName] = undefined;
                                deferred.resolve(result);
                            }
                        } else {
                            errorHandle(interfaceName, '网络连接错误，请重试', data.status);
                            deferred.reject('Error Services');
                        }
                    }, function(data) {
                        errorHandle(interfaceName, '网络连接错误，请重试', data.status);
                        deferred.reject('Error Services');
                    });
                }

                return deferred.promise;

                //错误处理
                function errorHandle(postName, errorTitle, errorCode) {
                    servicePostCount[postName] = undefined;

                    swal.fn({ title: errorTitle, text: '错误状态码：' + errorCode, allowEscapeKey: false, type: 'error' }, function() {
                        if(errorCode === 1009) {
                            $state.go('login');
                        }
                    });
                }
            }

            //上传图片
            function upload(param, ctrl, name) {
                var deferred = $q.defer();

                //上传文件到服务器
                Upload.upload({
                    url: ctrl ? getUrl(ctrl, name) : backend.upload,
                    data: param || {},
                    headers: { 'Access-Control-Allow-Origin': '*' }
                }).then(function(data) {
                    //service返回数据
                    var result = data.data;

                    //200代表接口调用成功
                    if(data.status === 200) {
                        //数据库返回错误信息
                        if(result && backendErrorCodes.indexOf(result.returnCode) >= 0) {
                            deferred.reject('Error Services');
                            swal.fn(result.message, '错误状态码：' + result.returnCode, 'error');
                        } else if(!result.dataInfo) {
                            deferred.reject('Error Image');
                            swal.fn('上传失败', '请重新上传', 'error');
                        } else {
                            deferred.resolve(result);
                        }
                    } else {
                        deferred.reject('Error Services');
                        swal.fn('提交操作失败', '错误状态码：' + data.status, 'error');
                    }
                }, function(error) {
                    deferred.reject('Error Services');
                    swal.fn('提交操作失败', '错误状态码：' + error.status, 'error');
                });

                return deferred.promise;
            }
        }
    });
})();
