(function() {
    define(['app'], function(app) {
        describe('directive: alarmReportChart', function() {
            var $compile, $rootScope;

            beforeEach(module(app.name));

            beforeEach(inject(function(_$compile_, _$rootScope_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            }));

        });
    });
})();