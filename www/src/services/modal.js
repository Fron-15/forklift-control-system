(function() {
    define(['app'], function(app) {
        app.service('Modal', Modal);

        Modal.$inject = ['$uibModal'];

        function Modal($uibModal) {
            var vm = this;

            //打开弹窗
            vm.open = open;

            //打开弹窗
            function open(folder, modal, params, size) {
                var options = angular.extend({
                    templateUrl: './src/' + folder + '/' + modal + '.html',
                    controller: modal + 'Ctrl',
                    controllerAs: modal,
                    backdrop: 'static',
                    resolve: params,
                    size: size
                });

                return $uibModal.open(options);
            }
        }
    });
})();