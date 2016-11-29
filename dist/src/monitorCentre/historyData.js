
(function() {
    define(['app'], function(app) {
        app.controller('historyDataCtrl', historyDataCtrl);

        historyDataCtrl.$inject = ['$scope','DatePicker','Service'];

        function historyDataCtrl($scope,DatePicker,Service) {
            var vm = this;
            //全选属性
            vm.allChecked = false;
            //日期选择器
            vm.datePicker = DatePicker;
            // 日期选择器选项
            vm.datePickerOptions = {maxDate:vm.datePicker.today};

            //单选
            vm.checked = checked;
            //全选点击事件
            vm.checkedAll=checkedAll;
            //查询条件
            vm.condition = { pageNo:1 , pageSize:10 };
            //数据总量，先写死 24 ，要根据接口
            vm.totalRecord = 30;



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
                var name = 'historyData'+vm.condition.pageNo;
                Service.getJson(name).then(function(data) {
                    vm.tableData = data;
                });
            }
            
        }
    });
})();
