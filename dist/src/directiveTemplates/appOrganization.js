(function() {
    define(['app'], function(app) {
        app.controller('appOrganizationCtrl', appOrganizationCtrl);

        appOrganizationCtrl.$inject = ['$scope', 'Service'];

        function appOrganizationCtrl($scope, Service) {
            var vm = this;

            //标题
            vm.title = vm.title || '组织架构';
            //关闭图标
            vm.closeIcon = vm.closeIcon || 'app-minus-square-o-icon';
            //打开图标
            vm.openIcon = vm.openIcon || 'app-plus-square-o-icon';

            //显示子机构列表
            vm.showList = showList;
            //获取图标
            vm.getIcon = getIcon;

            //获取机构列表
            getOrganizationList();

            //显示子机构列表
            function showList(item) {
                item.isShowSubList = !item.isShowSubList;
            }

            //获取图标
            function getIcon(item) {
                return item.isShowSubList ? vm.openIcon : vm.closeIcon;
            }

            //获取机构列表
            function getOrganizationList() {
                Service.getJson('organization').then(function(data) {
                    vm.list = data;
                });
            }
        }
    });
})();