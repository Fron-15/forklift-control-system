(function() {
    define(['app'], function(app) {
        describe('directive: moduleView', function() {
            var $compile, $rootScope, moduleView;

            beforeEach(module(app.name));

            beforeEach(inject(function(_$compile_, _$rootScope_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            }));

            afterEach(function() {
                moduleView = undefined;
            });

            it('should be initialized', function() {
                moduleView = $compile('<module-view icon="app-setting-icon" parent-title="系统设置 / " title="地市管理员"><h1>Module View</h1></module-view>')($rootScope);
                $rootScope.$digest();
                
                expect(moduleView.html()).toContain('<i class="icon app-setting-icon" ng-class="moduleView.icon"></i> 系统设置 /');
                expect(moduleView.html()).toContain('<span class="ng-binding">地市管理员</span>');
                expect(moduleView.html()).toContain('<ng-transclude><h1 class="ng-scope">Module View</h1></ng-transclude>');
            });
        });
    });
})();