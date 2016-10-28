(function() {
    define(['app'], function(app) {
        describe('directive: appOrganization', function() {
            var $compile, $rootScope, $httpBackend, appOrganization;

            beforeEach(module(app.name));

            beforeEach(inject(function(_$compile_, _$httpBackend_, _$rootScope_) {
                $compile = _$compile_;
                $httpBackend = _$httpBackend_;
                $rootScope = _$rootScope_;
            }));

            afterEach(function() {
                appOrganization = undefined;

                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            it('should be initialized', function() {
                appOrganization = $compile('<app-organization class="col-md-3"></app-organization>')($rootScope);

                $httpBackend.expectGET('./json/organization.json').respond([
                    {
                        "organizationCode": "0",
                        "organizationName": "中移在线服务有限公司",
                        "subOrganization": [
                            {
                                "organizationCode": "01",
                                "organizationName": "中移在线服务有限公司北京分公司"
                            }
                        ]
                    }
                ]);
                $httpBackend.flush();

                $rootScope.$digest();

                expect(appOrganization.html()).toContain('<div class="organization-title ng-binding">组织架构</div>');
                expect(appOrganization.html()).toContain('<span class="name ng-binding">中移在线服务有限公司</span>');
                expect(appOrganization.html()).toContain('<span class="text-muted"> 一 </span> 中移在线服务有限公司北京分公司');
            });
        });
    });
})();