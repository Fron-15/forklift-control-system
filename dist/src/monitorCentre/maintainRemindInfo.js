(function() {
    define(['app'], function(app) {
        app.controller('maintainRemindInfoCtrl', maintainRemindInfoCtrl);

        maintainRemindInfoCtrl.$inject = ['$scope', 'Service','$uibModalInstance'];

        function maintainRemindInfoCtrl($scope, Service,$uibModalInstance) {
            var vm = this;
            //关闭
            vm.close = close;
            //保存
            vm.save = save;
   

            //关闭
            function close(){
            	$uibModalInstance.dismiss('cancle');
            }
            //保存
            function save(){
             alert("保存成功!");
            }
          
        }
    }); 
})();

