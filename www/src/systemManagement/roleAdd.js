(function() {
    define(['app'], function(app) {
        app.controller('roleAddCtrl', roleAddCtrl);

        roleAddCtrl.$inject = ['$scope', 'Service',
        '$uibModalInstance','swal'];

        function roleAddCtrl($scope, Service,$uibModalInstance,swal) {
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
             swal.fn(swal.options.save,function(){
                swal.fn.close();
             })
            }
          
        }
    }); 
})();
