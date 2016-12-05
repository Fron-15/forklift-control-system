(function() {
    define(['app','echarts'], function(app,echarts) {
        app.directive('efficiencyMonthChart', efficiencyMonthChart);

        efficiencyMonthChart.$inject = [];

        function efficiencyMonthChart() {
            var directive = {
                restrict: 'AE',
                scope: {},
                controller: 'efficiencyMonthChartCtrl',
                controllerAs: 'efficiencyMonthChart',
                templateUrl: 'src/directiveTemplates/efficiencyMonthChart.html',
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
                        text: '月工作效率图',
                        x: '20px'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['闲置', '使用'],
                        x: '41%',
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
                        orient: 'vertical'
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        name:'日期',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '30', '31']
                    }],
                    yAxis: [{
                        type: 'value',
                        name:'工作小时数'
                    }],
                    series: [{
                        name: '闲置',
                        type: 'line',
                        stack: '总量',
                        data: [1, 2, 0, 5, 3, 12, 11, 10, 11, 6, 12, 12, 12, 13, 15, 21, 12, 16, 24, 15, 22, 16, 15, 0.8, 24, 26, 27, 28, 30, 29]
                    }, {
                        name: '使用',
                        type: 'line',
                        stack: '总量',
                        data: [9, 4, 0, 8, 3, 12, 11, 10, 7, 6, 12, 11, 11, 23, 15, 21, 13, 16, 24, 15, 21, 16, 25, 18, 23, 25, 27, 24, 33, 24]
                    }]
                };

                myChart.setOption(option);

            }
        }
    });
})();
