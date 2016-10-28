(function() {
    define(['app'], function(app) {
        app.config(config);

        config.$inject = ['$locationProvider', '$httpProvider'];

        function config($locationProvider, $httpProvider) {
            $locationProvider.html5Mode(true);
            $httpProvider.defaults.withCredentials = true;
        }
    });
})();