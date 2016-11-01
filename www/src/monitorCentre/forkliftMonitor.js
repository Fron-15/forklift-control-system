
(function() {
    define(['app'], function(app) {
        app.controller('forkliftMonitorCtrl', forkliftMonitorCtrl);

        forkliftMonitorCtrl.$inject = ['$scope','Service'];

        function forkliftMonitorCtrl($scope,Service) {
           var vm = this;
           vm.name = 'forkliftMonitorCtrl';
        }
    });
})();
