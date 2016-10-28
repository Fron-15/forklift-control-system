(function() {
    define(['app'], function(app) {
        app.directive('moduleView', moduleView);

        moduleView.$inject = [];

        function moduleView() {
            var directive = {
                restrict: 'AE',
                transclude: true,
                scope: {
                    icon: '@',
                    parentTitle: '@',
                    title: '@'
                },
                controller: 'moduleViewCtrl',
                controllerAs: 'moduleView',
                templateUrl: 'src/directiveTemplates/moduleView.html',
                bindToController: true
            };
            return directive;
        }
    });
})();