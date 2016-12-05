(function() {
    define(['app', 'echarts'], function(app, echarts) {
        app.directive('alarmReportChart', alarmReportChart);

        alarmReportChart.$inject = [];

        function alarmReportChart() {
            var directive = {
                restrict: 'AE',
                scope: {},
                controller: 'alarmReportChartCtrl',
                controllerAs: 'alarmReportChart',
                templateUrl: 'src/directiveTemplates/alarmReportChart.html',
                link: link
            };
            return directive;

            function link(scope, element, attrs) {
                var chart = element.find('div')[0];
                //初始化图表
                var myChart = echarts.init(chart);

                //图表相关配置
                var option = {
                    title:{
                        text:'叉车报警统计报表',
                        x:'30px'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['制动压力报警', '油压报警', '油温报警', '油水分离报警'],
                        x: '31%',
                        y: '7px'
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                            restore: { show: true },
                            saveAsImage: { show: true }
                        },
                        orient: 'vertical',
                        x:'95%'
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        name:'日期',
                        data: ['2016-10-12', '2016-10-13', '2016-10-14', '2016-10-15', '2016-10-16', '2016-10-17', '2016-10-18','2016-10-19', '2016-10-20', '2016-10-21', '2016-10-22', '2016-10-23', '2016-10-24', '2016-10-25']
                    }],
                    yAxis: [{
                        type: 'value',
                        name:'报警次数'
                    }],
                    series: [{
                        name: '制动压力报警',
                        type: 'line',
                        stack: '总量',
                        data: [0, 1,1, 2, 3, 3, 2,3,4, 5, 6,4,5,6]
                    }, {
                        name: '油压报警',
                        type: 'line',
                        stack: '总量',
                        data: [1, 0,1, 2, 4, 3, 4,4,5, 5, 6, 6,4,3]
                    }, {
                        name: '油温报警',
                        type: 'line',
                        stack: '总量',
                        data: [0, 2,3, 3, 2, 4, 4,5, 6, 6, 5, 5,3,2]
                    }, {
                        name: '油水分离报警',
                        type: 'line',
                        stack: '总量',
                        data: [1, 1,0, 0, 2, 3, 3,3, 4, 4, 4, 1,2,3]
                    }]
                };

                myChart.setOption(option);

            }
        }
    });
})();
