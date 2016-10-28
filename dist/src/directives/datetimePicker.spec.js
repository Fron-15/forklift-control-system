(function() {
    define(['app'], function(app) {
        describe('directive: datetimePicker', function() {
            var $compile, $rootScope, $filter, datetimePicker;

            beforeEach(module(app.name));

            beforeEach(inject(function(_$compile_, _$filter_, _$rootScope_) {
                $compile = _$compile_;
                $filter = _$filter_;
                $rootScope = _$rootScope_;
            }));

            afterEach(function() {
                datetimePicker = undefined;
            })

            it('should be initialized', function() {
                datetimePicker = $compile('<datetime-picker ng-model="$root.datetime"></datetime-picker>')($rootScope);
                $rootScope.$digest();

                expect(datetimePicker.html()).toContain('<div class="datetime-picker-block time-input-space"> : </div>');
            });

            it('should initialize the ngModel', function() {
                var compareDatetime = new Date();

                $rootScope.datetime = compareDatetime;

                datetimePicker = $compile('<datetime-picker ng-model="$root.datetime"></datetime-picker>')($rootScope);
                $rootScope.$digest();

                expect($rootScope.datetime).toBe($filter('date')(compareDatetime, 'yyyy-MM-dd HH:mm') + ':00');
            });
        });
    });
})();