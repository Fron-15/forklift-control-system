
(function() {
    define(['app'], function(app) {
        app.controller('forkliftMonitorCtrl', forkliftMonitorCtrl);

        forkliftMonitorCtrl.$inject = ['$scope', '$state', '$filter', '$sessionStorage','$location', 'Cache', 'Service'];

        function forkliftMonitorCtrl($scope, $state, $filter, $sessionStorage, Cache,$location, Service) {

        }
    });
})();
