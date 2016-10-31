(function() {
    define(['app'], function(app) {
        app.controller('homeCtrl', homeCtrl);

        homeCtrl.$inject = ['$scope', '$state', '$filter', '$sessionStorage','$location', 'Cache', 'Service'];

        function homeCtrl($scope, $state, $filter, $sessionStorage, Cache,$location, Service) {
            var vm = this;

            //选择父模块
            vm.chooseParent = chooseParent;
            //选择子模块
            vm.chooseChild = chooseChild;
            //进入模块
            vm.enterModule = enterModule;
            //离开模块
            vm.leaveModule = leaveModule;

            //获取模块列表
            getModuleList();

            //选择父模块
            function chooseParent(item) {
               vm.parentModule = item; 
            }

            //选择子模块
            function chooseChild(item) {
                vm.childModule = item;
                $state.go('module', { parent: vm.parentModule.code, name: item.code, param: null, param1: null });
                $sessionStorage.homeModuleInfo = { parent: vm.parentModule, child: vm.childModule };
            }

            //进入父模块
            function enterModule(item) {
                item.isEnter = true;
            }

            //离开父模块
            function leaveModule(item) {
                item.isEnter = false;
            }

            //获取模块列表
            function getModuleList() {
                Service.getJson('module').then(function(data) {
                    vm.moduleList = data;
                    chooseParent($filter('filter')(vm.moduleList, { code: 'monitorCentre' })[0]);
                    chooseChild($filter('filter')(vm.parentModule.items, { code: 'forkliftMonitor' })[0]);

                });
            }
        }
    });
})();
