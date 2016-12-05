(function() {
    define(['app'], function(app) {
        app.controller('efficiencyMonthChartCtrl', efficiencyMonthChartCtrl);

        efficiencyMonthChartCtrl.$inject = ['$scope'];

        function efficiencyMonthChartCtrl($scope) {
            var vm = this;
        }
    });
})();