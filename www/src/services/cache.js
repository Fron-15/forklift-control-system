(function() {
    define(['app'], function(app) {
        app.service('Cache', Cache);

        Cache.$inject = [];

        function Cache() {
            var vm = this;

            //缓存数据
            vm.info = {};

            //获取
            vm.get = get;
            //保存
            vm.save = save;
            //清除
            vm.clear = clear;

            //获取
            function get(key) {
                return angular.copy(vm.info[key]);
            }

            //保存
            function save(key, value) {
                vm.info[key] = angular.copy(value);
            }

            //清除
            function clear(key) {
                if(key) {
                    vm.info[key] = undefined;
                } else {
                    vm.info = {};
                }
            }
        }
    });
})();