(function() {
    define(['app', 'echarts'], function(app, echarts) {
        app.directive('violationReportChart', violationReportChart);

        violationReportChart.$inject = [];

        function violationReportChart() {
            var directive = {
                restrict: 'AE',
                scope: {},
                controller: 'violationReportChartCtrl',
                controllerAs: 'violationReportChart',
                templateUrl: 'src/directiveTemplates/violationReportChart.html',
                link: link
            };
            return directive;

            function link(scope, element, attrs) {
                var chart = element.find('div')[0];
                //初始化图表
                var myChart = echarts.init(chart);

                //图表相关配置
                var option = {
                    title: {
                        text: '叉车违规统计报表',
                        x: '30px'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['超速', '超载', '碰撞', '离位超时','偏离围栏','未系安全带'],
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
                        x: '95%'
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        name: '日期',
                        data: ['2016-10-12', '2016-10-13', '2016-10-14', '2016-10-15', '2016-10-16', '2016-10-17', '2016-10-18', '2016-10-19', '2016-10-20', '2016-10-21', '2016-10-22', '2016-10-23', '2016-10-24', '2016-10-25']
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '违规车辆台数'
                    }],
                    series: [{
                        name: '超速',
                        type: 'line',
                        stack: '总量',
                         smooth:true,
                        data: [0, 1, 1, 2, 3, 3, 2, 3, 4, 5, 6, 4, 5, 6]
                    }, {
                        name: '超载',
                        type: 'line',
                        stack: '总量',
                        smooth:true,
                        data: [1, 0, 2, 2, 3, 3, 2, 3, 5, 5, 6, 6, 4, 3]
                    }, {
                        name: '碰撞',
                        type: 'line',
                        stack: '总量',
                        smooth:true,
                        data: [1, 2, 3, 2, 2, 4, 4, 3, 6, 6, 5, 5, 3, 2]
                    }, {
                        name: '离位超时',
                        type: 'line',
                        stack: '总量',
                        smooth:true,
                        data: [1, 2, 0, 0, 2, 5, 3, 3, 4, 6, 5, 1, 2, 3]
                    },
                    {
                        name: '偏离围栏',
                        type: 'line',
                        stack: '总量',
                        smooth:true,
                        data: [1, 0, 0, 1, 2, 3, 2, 3, 4, 4, 5, 1, 2, 3]
                    },
                    {
                        name: '未系安全带',
                        type: 'line',
                        stack: '总量',
                        smooth:true,
                        data: [1, 3, 0, 2, 2, 1, 2, 3, 4, 2, 4, 1, 4, 6]
                    }]
                };

                myChart.setOption(option);

            }
        }
    });
})();
