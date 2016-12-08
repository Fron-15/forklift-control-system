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
                        boundaryGap: true,
                        name:'日期',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '30', '31']
                    }],
                    yAxis: [{
                        type: 'value',
                        name:'工作小时数'
                    }],
                    series: [{
                        name: '闲置',
                        type: 'bar',
                        stack: '总量',
                        smooth:true,
                        data: [1, 2, 0, 5, 3, 12, 11, 10, 11, 6, 12, 12, 12, 13, 15, 21, 12, 16, 24, 15, 22, 16, 15, 8, 24, 24, 23, 8, 3, 0]
                    }, {
                        name: '使用',
                        type: 'bar',
                        stack: '总量',
                        smooth:true,
                        data: [23, 22,24,19,21,12,13,14,13,18, 12, 12, 12, 11, 9, 3, 12, 8, 0, 9, 2, 8, 9, 16, 0, 0, 1, 16, 21, 24]
                    }]
                };

                myChart.setOption(option);

            }
        }
    });
})();
