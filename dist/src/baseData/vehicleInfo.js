
(function() {
    define(['app'], function(app) {
        app.controller('vehicleInfoCtrl', vehicleInfoCtrl);

        vehicleInfoCtrl.$inject = ['$scope','Service','Modal','swal'];

        function vehicleInfoCtrl($scope, Service,Modal,swal) {
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
             //打开新增界面
            vm.openVehicleInfoAdd = openVehicleInfoAdd;
             //打开编辑界面
            vm.openVehicleInfoEdit = openVehicleInfoEdit;
            //删除
            vm.remove = remove;



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
                var name = 'vehicleInfo'+vm.condition.pageNo;
                Service.getJson(name).then(function(data) {
                    vm.tableData = data;
                });
            }

              //新建控制器
            function openVehicleInfoAdd(){
              Modal.open('baseData','vehicleInfoAdd');
            }
             //编辑控制器
            function openVehicleInfoEdit(){
              Modal.open('baseData','vehicleInfoEdit');
            }
            //锁车
            function remove(){
             swal.fn(swal.options.remove,function(){
                swal.fn.close();
             })
            }
        }
    });
})();
