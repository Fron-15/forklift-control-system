(function() {
    define(['app'], function(app) {
        describe('homeCtrl', function() {
            var $controller, $rootScope, $httpBackend, $sessionStorage, $state, $scope, controller, Cache, Service;

            module.sharedInjector();

            beforeAll(module(app.name));

            beforeAll(inject(function(_$controller_, _$httpBackend_, _$rootScope_, _$sessionStorage_, _$state_, _Cache_, _Service_) {
                $controller = _$controller_;
                $httpBackend = _$httpBackend_;
                $rootScope = _$rootScope_;
                $sessionStorage = _$sessionStorage_;
                $state = _$state_;
                Cache = _Cache_;
                Service = _Service_;
            }));

            beforeEach(function() {
                $scope = $rootScope.$new();
                controller = $controller('homeCtrl', { $scope: $scope });

                $httpBackend.expectGET('./json/module.json').respond([]);
                $httpBackend.flush();
            });

            afterEach(function() {
                $scope = undefined;
                controller = undefined;

                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            it('should be initialized', function() {
                expect(controller).toBeDefined();
            });

            it('moduleList should be []', function() {
                expect(controller.moduleList).toEqual(jasmine.any(Object));
            });

            describe('testing function: chooseParent', function() {
                beforeEach(function() {
                    spyOn($state, 'go');
                });

                it('without item.items', function() {
                    var url = Service.getUrl('security', 'logout');
                    
                    controller.chooseParent({ code: 'logout' });

                    $httpBackend.expectPOST(url).respond(200);
                    $httpBackend.flush();

                    expect($state.go).toHaveBeenCalled();
                    expect($state.go).toHaveBeenCalledTimes(1);
                    expect($state.go).toHaveBeenCalledWith('login');
                });

                it('with item.items', function() {
                    var item = { items: [] };

                    controller.chooseParent(item);
                    expect(controller.parentModule).toEqual(item);
                });
            });

            it('testing function: chooseChild', function() {
                var parentItem = { items: [] }, childItem = {};

                spyOn(Cache, 'clear');
                spyOn($state, 'go');

                controller.chooseParent(parentItem);
                controller.chooseChild(childItem);

                expect(controller.childModule).toBe(childItem);
                expect($sessionStorage.homeModuleInfo).toEqual(jasmine.objectContaining({ parent: parentItem, child: childItem }));

                expect($state.go).toHaveBeenCalled();
                expect($state.go).toHaveBeenCalledTimes(1);
                expect($state.go).toHaveBeenCalledWith('module', { parent: undefined, name: undefined, param: null, param1: null });

                expect(Cache.clear).toHaveBeenCalled();
                expect(Cache.clear).toHaveBeenCalledTimes(1);
                expect(Cache.clear).toHaveBeenCalledWith('moduleCondition');
            });

            it('testing function: enterModule', function() {
                var item = {};

                controller.enterModule(item);
                expect(item.isEnter).toBeTruthy();
            });

            it('testing function: leaveModule', function() {
                var item = {};

                controller.leaveModule(item);
                expect(item.isEnter).toBeFalsy();
            });
        });
    });
})();