(function() {
    define(['app'], function(app) {
        app.config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider', 'components'];

        function config($stateProvider, $urlRouterProvider, components) {
            //已经加载的组件列表
            var loadedComponentList = [];
            //网址公共前缀
            var routeCommonPrefix = '/';

            $stateProvider
                .state('login', {
                    url: routeCommonPrefix + 'login?token',
                    templateUrl: 'src/private/login.html',
                    controller: 'loginCtrl as login',
                    resolve: {
                        load: ['$q', '$rootScope', function($q, $rootScope) {
                            return loadComponents($q, $rootScope, 'login');
                        }]
                    }
                })
                .state('home', {
                    url: routeCommonPrefix + 'home',
                    templateUrl: 'src/private/home.html',
                    controller: 'homeCtrl as home',
                    resolve: {
                        load: ['$q', '$rootScope', function($q, $rootScope) {
                            return loadComponents($q, $rootScope, 'home');
                        }]
                    }
                })
                .state('module', {
                    parent: 'home',
                    url: '/:parent/:name?param&param1',
                    templateUrl: getTemplateUrl,
                    controllerProvider: getControllerProvider,
                    resolve: {
                        load: ['$q', '$rootScope', '$stateParams', function($q, $rootScope, $stateParams) {
                            return loadComponents($q, $rootScope, $stateParams.parent + '.' + $stateParams.name);
                        }]
                    }
                });

            $urlRouterProvider.otherwise(routeCommonPrefix + 'login');

            //加载组件
            function loadComponents($q, $rootScope, name) {
                var deferred = $q.defer();

                if (loadedComponentList.indexOf(name) >= 0) {
                    deferred.resolve('Require Components Finished');
                } else {
                    require(components[name], function() {
                        $rootScope.$apply(function() {
                            loadedComponentList.push(name);
                            deferred.resolve('Require Components Finished');
                        });
                    });
                }

                return deferred.promise;
            }

            //模块路由配置
            getTemplateUrl.$inject = ['$stateParams'];
            getControllerProvider.$inject = ['$stateParams'];

            function getTemplateUrl($stateParams) {
                return './src/' + $stateParams.parent + '/' + $stateParams.name + '.html';
            }

            function getControllerProvider($stateParams) {
                return $stateParams.name + 'Ctrl as ' + $stateParams.name;
            }
        }
    });
})();
