(function() {
    define(['app'], function(app) {
        app.directive('appOrganization', appOrganization);

        appOrganization.$inject = [];

        function appOrganization() {
            var directive = {
                restrict: 'AE',
                replace: true,
                scope: {
                    class: '@',
                    title: '@',
                    closeIcon: '@',
                    openIcon: '@'
                },
                controller: 'appOrganizationCtrl',
                controllerAs: 'appOrganization',
                bindToController: true,
                templateUrl: 'src/directiveTemplates/appOrganization.html'
            };
            return directive;
        }
    });
})();