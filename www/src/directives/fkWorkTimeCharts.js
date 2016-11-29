(function() {
    define(['app'], function(app) {
        app.directive('fkWorkTimeCharts', fkWorkTimeCharts);

        fkWorkTimeCharts.$inject = [];

        function fkWorkTimeCharts() {
            var directive = {
                restrict: 'AE',
                scope: {},
                controller: 'fkWorkTimeChartsCtrl',
                controllerAs: 'fkWorkTimeCharts',
                templateUrl: 'src/directiveTemplates/fkWorkTimeCharts.html',
                link: link
            };
            return directive;

            function link(scope, element, attrs) {

            }
        }
    });
})();