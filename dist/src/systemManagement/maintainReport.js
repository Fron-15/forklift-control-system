
(function() {
    define(['app'], function(app) {
        app.controller('maintainReportCtrl', maintainReportCtrl);

        maintainReportCtrl.$inject = ['$scope','Service'];

        function maintainReportCtrl($scope,Service) {
           var vm = this;
           vm.name = 'maintainReportCtrl';
        }
    });
})();
