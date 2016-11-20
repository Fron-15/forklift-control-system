(function() {
    define(['app'], function(app) {
        app.controller('addForkliftControllerCtrl', addForkliftControllerCtrl);

        addForkliftControllerCtrl.$inject = ['$scope', 'Service','$uibModalInstance'];

        function addForkliftControllerCtrl($scope, Service,$uibModalInstance) {
            var vm = this;

             //取消
            vm.close = close;
            //保存
            vm.save = save;
   

            //取消
            function close(){
            	$uibModalInstance.dismiss('cancle');
            }

             //保存
            function save(){
            	
            }
          

        }
    });
})();


