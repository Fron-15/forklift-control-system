
(function() {
    define(['app'], function(app) {
        app.controller('vehicleStateCtrl', vehicleStateCtrl);

        vehicleStateCtrl.$inject = ['$scope','Service','swal'];
        

        function vehicleStateCtrl($scope, Service,swal) {
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

            //关闭
            vm.close = close;
            //锁车
            vm.lockVehicle = lockVehicle;
            //解除锁车
            vm.unlockVehicle = unlockVehicle;
            //限速
            vm.limitspeed = limitspeed;
            //解除限速
            vm.unlimitspeed = unlimitspeed;
            //发送语音
            vm.submitVideo = submitVideo;

            //被选中的叉车ID
            vm.checkedId = '';

            //获取叉车列表数据
            getTableData();

            //监控页码
            $scope.$watch(function(){ return vm.condition.pageNo},getTableData);
            //监控页容量
            $scope.$watch(function(){ return vm.condition.pageSize},getTableData);

             //关闭
            //锁车
            function lockVehicle(){
             swal.fn(swal.options.lockVehicle,function(){
                swal.fn.close();
             })
            }
            //解除锁车
            function unlockVehicle(){
             swal.fn(swal.options.unlockVehicle,function(){
                swal.fn.close();
             })
            }
            //限速
            function limitspeed(){
             swal.fn(swal.options.limitspeed,function(){
                swal.fn.close();
             })
            }
            //解除限速
            function unlimitspeed(){
             swal.fn(swal.options.unlimitspeed,function(){
                swal.fn.close();
             })
            }
            //发送语音
            function submitVideo(){
             swal.fn(swal.options.submitVideo,function(){
                swal.fn.close();
             })
            }

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
                var name = 'vehicleState'+vm.condition.pageNo;
                Service.getJson(name).then(function(data) {
                    vm.tableData = data;
                });
            }
        }
    });
})();
