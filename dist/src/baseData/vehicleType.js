(function() {
    define(['app'], function(app) {
        app.controller('vehicleTypeCtrl', vehicleTypeCtrl);

        vehicleTypeCtrl.$inject = ['$scope','Service','Modal','swal'];

        function vehicleTypeCtrl($scope,Service,Modal,swal) {

        	
           /* var vm = this;
            vm.list = [{
                "id": 1,
                "title": "node1",
                "nodes": [{
                    "id": 11,
                    "title": "node1.1",
                    "nodes": [{
                        "id": 111,
                        "title": "node1.1.1",
                        "nodes": []
                    }]
                }, {
                    "id": 12,
                    "title": "node1.2",
                    "nodes": []
                }]
            }, {
                "id": 2,
                "title": "node2",
                "nodrop": true,
                "nodes": [{
                    "id": 21,
                    "title": "node2.1",
                    "nodes": []
                }, {
                    "id": 22,
                    "title": "node2.2",
                    "nodes": []
                }]
            }, {
                "id": 3,
                "title": "node3",
                "nodes": [{
                    "id": 31,
                    "title": "node3.1",
                    "nodes": []
                }]
            }];*/

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
            vm.openVehicleTypeAdd = openVehicleTypeAdd;
             //打开编辑界面
            vm.openVehicleTypeEdit = openVehicleTypeEdit;
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
                var name = 'vehicleType'+vm.condition.pageNo;
                Service.getJson(name).then(function(data) {
                    vm.tableData = data;
                });
            }

             //新建控制器
            function openVehicleTypeAdd(){
              Modal.open('baseData','vehicleTypeAdd');
            }
             //编辑控制器
            function openVehicleTypeEdit(){
              Modal.open('baseData','vehicleTypeEdit');
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
