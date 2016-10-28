(function() {
    define(['app'], function(app) {
        describe('appPaginationCtrl', function() {
            var $controller, $rootScope,
                controller, $scope;

            module.sharedInjector();

            beforeAll(module(app.name));

            beforeAll(inject(function(_$controller_, _$rootScope_) {
                $controller = _$controller_;
                $rootScope = _$rootScope_;
            }));

            beforeEach(function() {
                $scope = $rootScope.$new();
                controller = $controller('appPaginationCtrl', { $scope: $scope });
            });

            afterEach(function() {
                $scope = undefined;
                controller = undefined;
            });

            it('should be initialized', function() {
                expect(controller).toBeDefined();
            });

            it('should have 2 watchers', function() {
                expect($scope.$countWatchers()).toBe(2);
            });

            it('testing function: pageSkip', function() {
                controller.skipIndex = 1;
                controller.pageSkip();
                expect(controller.pageIndex).toBe(1);
            });

            it('testing function: pageUp', function() {
                controller.pageIndex = 2;
                controller.pageUp();
                expect(controller.pageIndex).toBe(1);
            });

            it('testing function: pageDown', function() {
                controller.pageIndex = 1;
                controller.pageDown();
                expect(controller.pageIndex).toBe(2);
            });

            describe('testing function: updatePageUnit', function() {
                beforeEach(function() {
                    $scope.paginationForm = { unit: {} };
                });

                it('when paginationForm unit is invalid', function() {
                    $scope.paginationForm.unit.$invalid = true;
                    controller.pageItemUnit = 10;
                    controller.updatePageUnit();
                    expect(controller.pageUnit).toBe(10);
                });

                it('when paginationForm unit is valid and totalItems is undefined', function() {
                    $scope.paginationForm.unit.$invalid = false;
                    controller.pageUnit = 10;
                    controller.updatePageUnit();

                    expect(controller.pageItemUnit).toBe(10);
                    expect(controller.pageTotal).toBe(1);
                    expect(controller.skipIndex).toBeUndefined();
                    expect(controller.pageIndex).toBeUndefined();
                });

                it('when paginationForm unit is valid and totalItems is 100', function() {
                    $scope.paginationForm.unit.$invalid = false;
                    controller.pageUnit = 10;
                    controller.totalItems = 100;
                    controller.updatePageUnit();

                    expect(controller.pageItemUnit).toBe(10);
                    expect(controller.pageTotal).toBe(10);
                    expect(controller.skipIndex).toBeUndefined();
                    expect(controller.pageIndex).toBeUndefined();
                });

                it('when paginationForm unit is valid and totalItems is 100 and pageIndex is 20', function() {
                    $scope.paginationForm.unit.$invalid = false;
                    controller.pageUnit = 10;
                    controller.totalItems = 100;
                    controller.pageIndex = 20;
                    controller.updatePageUnit();

                    expect(controller.pageItemUnit).toBe(10);
                    expect(controller.pageTotal).toBe(10);
                    expect(controller.skipIndex).toBe(1);
                    expect(controller.pageIndex).toBe(1);
                });
            });
        });
    });
})();