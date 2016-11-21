(function() {
    define(['app'], function(app) {
        app.controller('datetimePickerCtrl', datetimePickerCtrl);

        datetimePickerCtrl.$inject = ['$scope', '$filter', 'moment'];

        function datetimePickerCtrl($scope, $filter, moment) {
            var vm = this;

            //ngModelController
            var ngModelCtrl = {};

            //日期选择器选项
            vm.dateOptions = angular.extend({ formatMonth: 'M月份', formatDayTitle: 'yyyy-MM' }, vm.datePickerOptions);
            //日期格式
            vm.dateFormat = vm.dateFormat || 'yyyy-MM-dd';
            //是否显示日期选择器底部栏
            vm.showBar = vm.showDatePickerButtonBar === 'false' ? false : true;
            //是否为必填项
            vm.required = vm.datetimeRequired === 'true' ? true : false;
            vm.showYear = vm.dateTimeShowYear=== 'true' ? true : false;
            //日期明细
            vm.item = {};

            //加载
            vm.load = load;
            //打开日期选择框
            vm.openPopup = openPopup;

            //监控日期
            $scope.$watch(function() { return vm.item.date; }, combineDateTime);
            //监控小时
            $scope.$watch(function() { return vm.item.hour; }, combineDateTime);
            //监控分钟
            $scope.$watch(function() { return vm.item.mimute; }, combineDateTime);

            //獲取時間列表
            getTimeList();

            //加载
            function load(ctrl) {
                ngModelCtrl = ctrl;
            }

            //打开日期选择框
            function openPopup() {
                vm.item.isOpen = true;
            }

            //合并时间信息
            function combineDateTime() {
                var datetime = undefined;

                if(vm.item.date && vm.item.hour && vm.item.mimute) {
                    datetime = $filter('date')(vm.item.date, 'yyyy-MM-dd') + ' ' + vm.item.hour + ':' + vm.item.mimute + ':00';
                }
                //把时间数值更新到ngModel
                ngModelCtrl.$setViewValue(datetime);
            }

            //獲取時間列表
            function getTimeList() {
                vm.hourList = [];
                vm.minuteList = [];

                for(var i = 0; i <= 23; i++) {
                    vm.hourList.push(('0' + i).substr(-2, 2));
                }

                for(var j = 0; j <= 59; j++) {
                    vm.minuteList.push(('0' + j).substr(-2, 2));
                }
            }
        }
    });
})();
