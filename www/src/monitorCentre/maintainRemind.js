
(function() {
    define(['app'], function(app) {
        app.controller('maintainRemindCtrl', maintainRemindCtrl);

        maintainRemindCtrl.$inject = ['$scope','Service','Modal'];

       function maintainRemindCtrl($scope, Service,Modal) {
            var vm = this;
            //全选属性
            vm.allChecked = false;

            //单选
            vm.checked = checked;
            //全选点击事件
            vm.checkedAll=checkedAll;
            //查询条件
            vm.condition = { pageNo:1 , pageSize:10 };
            //数据总量，先写死 24 ，要根据接口
            vm.totalRecord = 30;

            //打开叉车检索信息
            vm.openMaintainRemindInfo = openMaintainRemindInfo;

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
            //全选
            function checkedAll(){
                  vm.allChecked = !vm.allChecked;
            }

            //获取叉车列表数据(模拟)
            function getTableData() {
                var name = 'maintainRemind'+vm.condition.pageNo;
                Service.getJson(name).then(function(data) {
                    vm.tableData = data;
                });
            }

             //打开叉车检索
            function openMaintainRemindInfo(){
              Modal.open('monitorCentre','maintainRemindInfo');
            }
        }
    });
})();
