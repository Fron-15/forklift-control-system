(function() {
    define(['app'], function(app) {
        app.controller('forkliftMonitorCtrl', forkliftMonitorCtrl);

        forkliftMonitorCtrl.$inject = ['$scope', 'Service','Modal'];

        function forkliftMonitorCtrl($scope, Service,Modal) {
            var vm = this;
            //单选
            vm.checked = checked;
            //打开叉车检索
            vm.openForkliftSearch = openForkliftSearch;
            //查询条件
            vm.condition = { pageNo:1 , pageSize:10 };
            //数据总量，先写死 24 ，要根据接口
            vm.totalRecord = 24;



            //被选中的叉车ID
            vm.checkedId = '';

            //获取叉车列表数据
            getTableData();

            //监控页码
            $scope.$watch(function(){ return vm.condition.pageNo},getTableData);
            //监控页容量
            $scope.$watch(function(){ return vm.condition.pageSize},getTableData);


            //单选
            function checked(item) {
                vm.checkedId = vm.checkedId == item ? '' : item;
            }

            //获取叉车列表数据(模拟)
            function getTableData() {
                var name = 'forkliftMonitor'+vm.condition.pageNo;
                Service.getJson(name).then(function(data) {
                    vm.tableData = data;
                });
            }

            //打开叉车检索
            function openForkliftSearch(){
              Modal.open('monitorCentre','forkliftSearch');
            }

        }
    });
})();
