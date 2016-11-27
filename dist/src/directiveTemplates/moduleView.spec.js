(function() {
    define(['app'], function(app) {
        describe('moduleViewCtrl', function() {
            var $sessionStorage, $controller, $rootScope, $scope, controller;

            module.sharedInjector();

            beforeAll(module(app.name));

            beforeAll(inject(function(_$controller_, _$rootScope_, _$sessionStorage_) {
                $controller = _$controller_;
                $rootScope = _$rootScope_;
                $sessionStorage = _$sessionStorage_;
            }));

            beforeEach(function() {
                $scope = $rootScope.$new();
                $sessionStorage.userInfo = {};
                controller = $controller('moduleViewCtrl', { $scope: $scope, $sessionStorage: $sessionStorage });
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