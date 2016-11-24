(function() {
    define(['app'], function(app) {
        app.controller('homeCtrl', homeCtrl);

        homeCtrl.$inject = ['$scope', '$state', '$filter', '$sessionStorage', '$location', 'Cache', 'Service'];

        function homeCtrl($scope, $state, $filter, $sessionStorage, Cache, $location, Service) {
            var vm = this;

            //选择父模块
            vm.chooseParent = chooseParent;
            //选择子模块
            vm.chooseChild = chooseChild;


            //获取模块列表
            getModuleList();
            //退出
            vm.logout = logout;

            //用户信息
            vm.userInfo = $sessionStorage.userInfo;

            function logout() {

                $state.go('login');

            }

            //选择父模块
            function chooseParent(item) {
                vm.parentModule = item;
                item.childShow = !item.childShow;
                angular.forEach(vm.moduleList, function(data, index, array) {
                    data.childShow = data.code == item.code ? true : false;
                });

            }

            //选择子模块
            function chooseChild(parentItem, childItem) {
                vm.childModule = childItem;
                vm.parentModule = parentItem;
                $state.go('module', { parent: vm.parentModule.code, name: childItem.code, param: null, param1: null });
            }


            //获取模块列表
            function getModuleList() {
                Service.getJson('module').then(function(data) {
                    vm.moduleList = data;
                    chooseParent($filter('filter')(vm.moduleList, { code: 'monitorCentre' })[0]);
                    chooseChild(vm.parentModule, $filter('filter')(vm.parentModule.items, { code: 'forkliftMonitor' })[0]);
                });
            }
        }
    });
})();
