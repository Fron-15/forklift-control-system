(function() {
    define(['app'], function(app) {
        app.directive('datetimePicker', datetimePicker);

        datetimePicker.$inject = ['$filter', 'moment'];

        function datetimePicker($filter, moment) {
            var directive = {
                restrict: 'AE',
                replace: true,
                require: ['ngModel', 'datetimePicker'],
                scope: {
                    dateFormat: '@',
                    datetimeRequired: '@',
                    datePickerOptions: '=',
                    showDatePickerButtonBar: '@'
                },
                controller: 'datetimePickerCtrl',
                controllerAs: 'datetimePicker',
                templateUrl: 'src/directiveTemplates/datetimePicker.html',
                bindToController: true,
                link: link
            };
            return directive;

            function link(scope, element, attrs, ctrls) {
                var ngModelCtrl = ctrls[0], datetimePickerCtrl = ctrls[1];

                //将ngModelCtrl传到datetimePickerCtrl中使用
                datetimePickerCtrl.load(ngModelCtrl);

                //View To Model
                ngModelCtrl.$parsers.push(formatView);
                //Model To View
                ngModelCtrl.$formatters.push(formatModel);

                //View To Model
                function formatView(viewValue) {
                    return viewValue;
                }

                //Model To View
                function formatModel(modelValue) {
                    if(modelValue) {
                        var datetime = moment(modelValue);
                        angular.extend(datetimePickerCtrl.item, { date: datetime.toDate(), hour: datetime.format('HH'), mimute: datetime.format('mm') });
                    }
                    return modelValue;
                }
            }
        }
    });
})();