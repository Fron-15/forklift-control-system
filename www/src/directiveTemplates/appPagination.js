(function() {
    define(['app'], function(app) {
        app.controller('appPaginationCtrl', appPaginationCtrl);

        appPaginationCtrl.$inject = ['$scope'];

        function appPaginationCtrl($scope) {
            var vm = this;
            //跳转页
            vm.skipIndex = vm.pageIndex;
            //每页笔数
            vm.pageUnit = vm.pageItemUnit;

            //更新每页笔数
            vm.updatePageUnit = updatePageUnit;
            //跳转
            vm.pageSkip = pageSkip;
            //向上一页
            vm.pageUp = pageUp;
            //向下一页
            vm.pageDown = pageDown;

            //监控资料总笔数
            $scope.$watch(function() { return vm.totalItems; }, updatePageTotal);
            //监控跳转页码
            $scope.$watch(function() { return vm.skipIndex; }, checkSkipIndex);

            //更新页面
            function updatePageUnit() {
                if($scope.paginationForm.unit.$invalid) {
                    vm.pageUnit = vm.pageItemUnit;
                } else {
                    vm.pageItemUnit = parseInt(vm.pageUnit);
                    updatePageTotal();
                }
            }

            //跳转
            function pageSkip() {
                vm.pageIndex = parseInt(vm.skipIndex);
            }

            //向上一页
            function pageUp() {
                vm.pageIndex = parseInt(vm.pageIndex) - 1;
            }

            //向下一页
            function pageDown() {
                vm.pageIndex = parseInt(vm.pageIndex) + 1;
            }

            //更新总页数
            function updatePageTotal() {
                vm.pageTotal = vm.totalItems ? Math.ceil(vm.totalItems / vm.pageItemUnit) : 1;

                if(vm.pageIndex > vm.pageTotal && vm.totalItems !== undefined) {
                    vm.skipIndex = 1;
                    vm.pageIndex = 1;
                }
            }

            //检查跳转页码
            function checkSkipIndex() {
                $scope.paginationForm.skip.$setValidity('check', vm.totalItems === undefined || parseInt(vm.skipIndex) <= vm.pageTotal);
            }
        }
    });
})();
