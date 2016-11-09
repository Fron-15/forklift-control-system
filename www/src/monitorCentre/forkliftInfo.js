(function() {
    define(['app'], function(app) {
        app.controller('forkliftInfoCtrl', forkliftInfoCtrl);

        forkliftInfoCtrl.$inject = ['$scope', 'Service','$uibModalInstance'];

        function forkliftInfoCtrl($scope, Service,$uibModalInstance) {
            var vm = this;
            //关闭
            vm.close = close;
             //获取叉车信息列表数据(模拟)
             getTableData();

            //关闭
            function close(){
            	$uibModalInstance.dismiss('cancle');
            }

            //获取叉车信息列表数据(模拟)
            function getTableData() {
                Service.getJson('forkliftInfo_1').then(function(data) {
                    vm.baseInfoData = data;
                });
                Service.getJson('forkliftInfo_2').then(function(data) {
                    vm.vechileData = data;
                });
            }
          
        }
    }); 
})();

