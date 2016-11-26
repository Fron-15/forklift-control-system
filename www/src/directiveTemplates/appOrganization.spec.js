(function() {
    define(['app'], function(app) {
        describe('appOrganizationCtrl', function() {
            var $controller, $rootScope, $scope, controller;

            module.sharedInjector();

            beforeAll(module(app.name));

            beforeAll(inject(function(_$controller_, _$rootScope_) {
                $controller = _$controller_;
                $rootScope = _$rootScope_;
            }));

            beforeEach(function() {
                $scope = $rootScope.$new();
                controller = $controller('appOrganizationCtrl', { $scope: $scope });
            });

            afterEach(function() {
                $scope = undefined;
                controller = undefined;
            });

            it('should be initialized', function() {
                expect(controller).toBeDefined();
            });

            it('testing function: showList', function() {
                var item = {};

                controller.showList(item);
                expect(item.isShowSubList).toBeTruthy();

                controller.showList(item);
                expect(item.isShowSubList).toBeFalsy();
            });

            it('testing function: getIcon', function() {
                var item = {}, icon;

                icon = controller.getIcon(item);
                expect(icon).toBe(controller.closeIcon);

                item.isShowSubList = true;
                icon = controller.getIcon(item);
                expect(icon).toBe(controller.openIcon);
            });
        });
    });
})();