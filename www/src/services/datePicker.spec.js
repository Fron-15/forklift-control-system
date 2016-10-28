(function() {
    define(['app'], function(app) {
        describe('DatePicker', function() {
            var DatePicker;

            beforeEach(module(app.name));

            beforeEach(inject(function(_DatePicker_) {
                DatePicker = _DatePicker_;
            }));

            it('should be an Object', function() {
                expect(DatePicker).toEqual(jasmine.any(Object));
            });

            it('testing function: open', function() {
                var event = { preventDefault: angular.noop, stopPropagation: angular.noop };

                spyOn(event, 'preventDefault');
                spyOn(event, 'stopPropagation');

                expect(DatePicker.target.date).toBeUndefined();
                expect(event.preventDefault).not.toHaveBeenCalled();
                expect(event.stopPropagation).not.toHaveBeenCalled();

                DatePicker.open(event, 'date');

                expect(DatePicker.target.date).toBeTruthy();
                expect(event.preventDefault).toHaveBeenCalled();
                expect(event.preventDefault).toHaveBeenCalledTimes(1);
                expect(event.stopPropagation).toHaveBeenCalled();
                expect(event.stopPropagation).toHaveBeenCalledTimes(1);
            });

            describe('testing function: parse', function() {
                it('when obj is null or obj is not an object', function() {
                    spyOn(angular, 'isArray');

                    DatePicker.parse();
                    expect(angular.isArray).not.toHaveBeenCalled();

                    DatePicker.parse('testing');
                    expect(angular.isArray).not.toHaveBeenCalled();
                });

                it('when keys are null', function() {
                    spyOn(angular, 'isArray');

                    DatePicker.parse({});
                    expect(angular.isArray).not.toHaveBeenCalled();
                });

                it('when keys are not array', function() {
                    var date = new Date(),
                        obj = { startDate: date, endDate: date },
                        startDateParse = Date.parse(obj.startDate);

                    DatePicker.parse(obj, 'startDate');
                    expect(obj.startDate).toEqual(startDateParse);
                    expect(obj.endDate).toEqual(date);
                });

                it('when keys are array', function() {
                    var date = new Date(),
                        obj = { startDate: date, endDate: date },
                        dateParse = Date.parse(date);

                    DatePicker.parse(obj, ['startDate', 'endDate']);
                    expect(obj.startDate).toEqual(dateParse);
                    expect(obj.endDate).toEqual(dateParse);
                });
            });
        });
    });
})();