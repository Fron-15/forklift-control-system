(function() {
    define(['app'], function(app) {
        describe('lineChartsCtrl', function() {
            var $controller, $rootScope, $scope, controller;

            module.sharedInjector();

            beforeAll(module(app.name));

            beforeAll(inject(function(_$controller_, _$rootScope_) {
                $controller = _$controller_;
                $rootScope = _$rootScope_;
            }));

            beforeEach(function() {
                $scope = $rootScope.$new();
                controller = $controller('lineChartsCtrl', { $scope: $scope });
            });

            afterEach(function() {
                $scope = undefined;
                controller = undefined;
            });

            it('should be initialized', function() {
                expect(controller).toBeDefined();
            });
        });
    });
})();