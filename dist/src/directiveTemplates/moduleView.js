(function() {
    define(['app'], function(app) {
        app.controller('moduleViewCtrl', moduleViewCtrl);

        moduleViewCtrl.$inject = ['$scope', '$sessionStorage'];

        function moduleViewCtrl($scope, $sessionStorage) {
            var vm = this;
            
            //用户信息
            vm.userInfo = $sessionStorage.userInfo;
        }
    });
})();
