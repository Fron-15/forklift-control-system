(function() {
    define(['app', 'echarts'], function(app, echarts) {
        app.directive('lineCharts', lineCharts);

        lineCharts.$inject = [];

        function lineCharts() {
            var directive = {
                restrict: 'AE',
                scope: {},
                controller: 'lineChartsCtrl',
                controllerAs: 'lineCharts',
                templateUrl: 'src/directiveTemplates/lineCharts.html',
                link: link
            };
            return directive;

            function link(scope, element, attrs) {
                var chart = element.find('div')[0];
                //初始化图表
                var myChart = echarts.init(chart);

                //图表相关配置
                var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['粉丝', '任务领取', '任务完成', '任务创建', '和微币','页面浏览'],
                        x:'31%',
                        y:'7px'
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
                        orient:'vertical'
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: ['2016-10-12', '2016-10-13', '2016-10-14', '2016-10-15', '2016-10-16', '2016-10-17', '2016-10-18','2016-10-19', '2016-10-20', '2016-10-21', '2016-10-22', '2016-10-23', '2016-10-24', '2016-10-25']
                    }],
                    yAxis: [{
                        type: 'value'
                    }],
                    series: [{
                        name: '粉丝',
                        type: 'line',
                        stack: '总量',
                        data: [85, 96, 77, 42, 90, 12, 120,120, 125, 128, 132, 150, 145, 140]
                    }, {
                        name: '任务领取',
                        type: 'line',
                        stack: '总量',
                        data: [105, 80, 150, 20, 30, 130, 85,105, 80, 120, 20, 30, 130, 85]
                    }, {
                        name: '任务完成',
                        type: 'line',
                        stack: '总量',
                        data: [12, 82, 120, 125, 149, 88, 99,12, 82, 120, 125, 149, 88, 99]
                    }, {
                        name: '任务创建',
                        type: 'line',
                        stack: '总量',
                        data: [3, 47, 75, 105, 110, 120, 130,3, 47, 75, 105, 110, 120, 130]
                    }, {
                        name: '和微币',
                        type: 'line',
                        stack: '总量',
                        data: [10, 125, 69, 45, 120, 140, 150,10, 125, 69, 45, 120, 140, 150]
                    }, {
                        name: '页面浏览',
                        type: 'line',
                        stack: '总量',
                        data: [25, 93, 123, 145, 100, 80, 70,25, 93, 123, 145, 100, 80, 70]
                    }]
                };

                myChart.setOption(option);
            }
        }
    });
})();
