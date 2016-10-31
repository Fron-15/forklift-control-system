
(function() {
    define(['app'], function(app) {
        app.controller('monitorCtrl', monitorCtrl);

        monitorCtrl.$inject = ['$scope', '$state', '$filter', '$sessionStorage','$location', 'Cache', 'Service'];

        function monitorCtrl($scope, $state, $filter, $sessionStorage, Cache,$location, Service) {

        }
    });
})();
