(function() {
    define(['app'], function(app) {
        app.controller('forkliftSearchCtrl', forkliftSearchCtrl);

        forkliftSearchCtrl.$inject = ['$scope', 'Service','$uibModalInstance'];

        function forkliftSearchCtrl($scope, Service,$uibModalInstance) {
            var vm = this;
            //关闭
            vm.close = close;
   

            //关闭
            function close(){
            	$uibModalInstance.dismiss('cancle');
            }
          
        }
    }); 
})();

