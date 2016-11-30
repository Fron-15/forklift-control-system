(function() {
    define(['app', 'echarts'], function(app, echarts) {
        app.directive('fkWorkTimeChart', fkWorkTimeChart);

        fkWorkTimeChart.$inject = [];

        function fkWorkTimeChart() {
            var directive = {
                restrict: 'AE',
                scope: {},
                controller: 'fkWorkTimeChartCtrl',
                controllerAs: 'fkWorkTimeChart',
                templateUrl: 'src/directiveTemplates/fkWorkTimeChart.html',
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
                        text: '叉车工作时间',
                        x:'20px'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['统计期间工作小时数', '累计工作小时数']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            magicType: { show: true, type: ['line', 'bar'] },
                            restore: { show: true },
                            saveAsImage: { show: true }
                        },
                        orient:'vertical',
                        x:'95%'
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        data: ['M5AF00002', 'M5AF00003', 'M5AF00004', 'M5AF00005', 'M5AF00006', 'M5AF00007', 'M5AF00008', 'M5AF00010', 'M5AF00011', 'M5AF00012', 'M5AF00013', 'M5AF00014']
                    }],
                    yAxis: [{
                        type: 'value'
                    }],
                    series: [{
                        name: '统计期间工作小时数',
                        type: 'bar',
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        markPoint: {
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' }
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    }, {
                        name: '累计工作小时数',
                        type: 'bar',
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint: {
                            data: [
                                { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18 },
                                { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    }]
                };

                myChart.setOption(option);

            }
        }
    });
})();
