(function() {
    define(['app'], function(app) {
        app.controller('lineChartsCtrl', lineChartsCtrl);

        lineChartsCtrl.$inject = ['$scope'];

        function lineChartsCtrl($scope) {
            var vm = this;
        }
    });
})();