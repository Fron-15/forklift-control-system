(function() {
    define(['app', 'md5'], function(app, md5) {
        app.controller('loginCtrl', loginCtrl);

        loginCtrl.$inject = ['$scope', '$state', '$stateParams', '$localStorage', '$sessionStorage', 'Service', 'swal'];

        function loginCtrl($scope, $state, $stateParams, $localStorage, $sessionStorage, Service, swal) {
            var vm = this;

            //是否通过token登录
            vm.isVerifyLogin = !$stateParams.token;
            //登录信息
            vm.item = $localStorage.systemLoginInfo || {};

            //登录/登出
            vm.login = login;

            //监控是否记住用户名和密码
            $scope.$watch(function() { return vm.item.isRemember; }, changeIsRemember);

            //自动登录
            autoLogin();

            //登录
            function login() {
                var item = angular.copy(vm.item);

                //更新登录信息
                angular.extend(item, { password: md5(item.password), isRemember: undefined });
                //是否记住用户名和密码
                changeIsRemember();
                swal.fn(swal.options.login, function() {
                        $state.go('home');
                        swal.fn.close();
                    });
            }

            //监控是否记住用户名和密码
            function changeIsRemember() {
                if(vm.item.isRemember) {
                    $localStorage.systemLoginInfo = angular.copy(vm.item);
                } else {
                    delete $localStorage.systemLoginInfo;
                }
            }

            //自动登录
            function autoLogin() {
                if(!vm.isVerifyLogin) {
                    Service.post('security', 'verifyLogin', { token: $stateParams.token }).then(function(data) {
                        $sessionStorage.userInfo = data.dataInfo;
                        $state.go('home');
                    }, function(error) {
                        $state.go('login', { token: null });
                    });
                }
            }
        }
    });
})();
