(function() {
    define(['app'], function(app) {
        app.directive('appPagination', appPagination);

        appPagination.$inject = [];

        function appPagination() {
            var directive = {
                restrict: 'AE',
                scope: {
                    pageIndex: '=',
                    totalItems: '=',
                    pageItemUnit: '=',
                    showTotal: '@'
                },
                controller: 'appPaginationCtrl',
                controllerAs: 'pagination',
                bindToController: true,
                templateUrl: 'src/directiveTemplates/appPagination.html'
            }
            return directive;
        }
    });
})();