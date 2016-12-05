(function() {
    define(['app'], function(app) {
        app.controller('efficiencyDayChartCtrl', efficiencyDayChartCtrl);

        efficiencyDayChartCtrl.$inject = ['$scope'];

        function efficiencyDayChartCtrl($scope) {
            var vm = this;
        }
    });
})();