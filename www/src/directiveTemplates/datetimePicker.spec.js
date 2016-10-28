(function() {
    define(['app'], function(app) {
        describe('datetimePickerCtrl', function() {
            var $controller, $rootScope, $scope, controller;

            module.sharedInjector();

            beforeAll(module(app.name));

            beforeAll(inject(function(_$controller_, _$rootScope_) {
                $controller = _$controller_;
                $rootScope = _$rootScope_;
            }));

            beforeEach(function() {
                $scope = $rootScope.$new();
                controller = $controller('datetimePickerCtrl', { $scope: $scope });
            });

            afterEach(function() {
                $scope = undefined;
                controller = undefined;
            });

            it('should be initialized', function() {
                expect(controller).toBeDefined();
            });

            it('should have 3 watchers', function() {
                expect($scope.$countWatchers()).toBe(3);
            });

            it('testing function: openPopup', function() {
                controller.openPopup();
                expect(controller.item.isOpen).toBeTruthy();
            });
        });
    });
})();