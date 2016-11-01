
(function() {
    define(['app'], function(app) {
        app.controller('roleCtrl', roleCtrl);

        roleCtrl.$inject = ['$scope','Service'];

        function roleCtrl($scope,Service) {
           var vm = this;
           vm.name = 'roleCtrl';
        }
    });
})();
