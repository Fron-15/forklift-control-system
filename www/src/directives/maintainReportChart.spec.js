(function() {
    define(['app'], function(app) {
        describe('directive: maintainReportChart', function() {
            var $compile, $rootScope;

            beforeEach(module(app.name));

            beforeEach(inject(function(_$compile_, _$rootScope_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            }));

        });
    });
})();