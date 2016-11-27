(function() {
    define(['app'], function(app) {
        app.controller('mapChartsCtrl', mapChartsCtrl);

        mapChartsCtrl.$inject = ['$scope', 'Service'];

        function mapChartsCtrl($scope, Service) {
            var vm = this;
            //选择某个省份
            vm.selectProvince = selectProvince;

            //选择某个省份
            function selectProvince(selectedProvince) {
                $scope.$apply(function() {
                    vm.selectedProvince = selectedProvince;
                });
            }
        }
    });
})();
