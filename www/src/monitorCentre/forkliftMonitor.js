(function() {
    define(['app'], function(app) {
        app.controller('forkliftMonitorCtrl', forkliftMonitorCtrl);

        forkliftMonitorCtrl.$inject = ['$scope', 'Service'];

        function forkliftMonitorCtrl($scope, Service) {
            var vm = this;
            //是否全选属性
            vm.allChecked = false;
            //单选
            vm.checked = checked;
            //全选
            vm.checkAll = checkAll;


            //被选中的叉车ID
            vm.checkedId = '';

            //获取叉车列表数据
            getTableData();



            //单选
            function checked(item) {
            	vm.checkedId = vm.checkedId == item?'':item;
            }

            //全选
            function checkAll() {
                vm.allChecked = !vm.allChecked;
            }

            //获取叉车列表数据
            function getTableData() {
                Service.getJson('forkliftMonitor').then(function(data) {
                    vm.tableData = data;
                });
            }
        }
    });
})();
