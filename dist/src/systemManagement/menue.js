
(function() {
    define(['app'], function(app) {
        app.controller('menueCtrl', menueCtrl);

        menueCtrl.$inject = ['$scope','Service','Modal','swal'];

         function menueCtrl($scope, Service,Modal,swal) {
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
            vm.openMenueAdd = openMenueAdd;
             //打开编辑界面
            vm.openMenueEdit = openMenueEdit;
            //删除
            vm.remove = remove;

            //新建控制器
            function openMenueAdd(){
              Modal.open('systemManagement','menueAdd');
            }
             //编辑控制器
            function openMenueEdit(){
              Modal.open('systemManagement','menueEdit');
            }
            //删除
            function remove(){
             swal.fn(swal.options.remove,function(){
                swal.fn.close();
             })
            }



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
                var name = 'menue'+vm.condition.pageNo;
                Service.getJson(name).then(function(data) {
                    vm.tableData = data;
                });
            }
        }
    });
})();
