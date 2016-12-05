(function() {
    define(['app'], function(app) {
        app.controller('efficiencyChartCtrl', efficiencyChartCtrl);

        efficiencyChartCtrl.$inject = ['$scope'];

        function efficiencyChartCtrl($scope) {
            var vm = this;
        }
    });
})();