(function() {
    define(['app'], function(app) {
        app.run(run);

        run.$inject = ['$rootScope', '$state', '$sessionStorage', 'swal'];

        function run($rootScope, $state, $sessionStorage, swal) {
            //路由跳转监控
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
               
            });
        }
    });
})();
