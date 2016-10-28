(function() {
    define(['app'], function(app) {
        app.service('DatePicker', DatePicker);

        DatePicker.$inject = ['$filter'];

        function DatePicker($filter) {
            var vm = this;

            //datepicker选项
            vm.options = { formatMonth: 'M月份', formatDayTitle: 'yyyy-MM' };
            //今天
            vm.today = new Date();
            //日期目标
            vm.target = {};

            //打开date picker
            vm.open = open;
            //转换日期格式
            vm.parse = parse;

            //打开date picker
            function open($event, type) {
                $event.preventDefault();
                $event.stopPropagation();

                vm.target = {};
                vm.target[type] = true;
            }

            //转换日期格式
            function parse(obj, keys, format) {
                //日期格式
                // var dateFormat = format || 'yyyy-MM-dd';

                //对象为空或不是对象或键值为空
                if(!obj || !angular.isObject(obj) || !keys) {
                    return;
                }

                //键值是否为数组
                if(angular.isArray(keys)) {
                    angular.forEach(keys, function(key, i) {
                        obj[key] = obj[key] && !angular.isNumber(obj[key]) ? Date.parse(obj[key]) : obj[key];
                    });
                } else {
                    obj[keys] = obj[keys] && !angular.isNumber(obj[keys]) ? Date.parse(obj[keys]) : obj[keys];
                }
            }
        }
    });
})();