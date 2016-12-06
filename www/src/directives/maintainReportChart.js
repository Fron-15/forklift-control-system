(function() {
    define(['app', 'echarts'], function(app, echarts) {
        app.directive('maintainReportChart', maintainReportChart);

        maintainReportChart.$inject = [];

        function maintainReportChart() {
            var directive = {
                restrict: 'AE',
                scope: {},
                controller: 'maintainReportChartCtrl',
                controllerAs: 'maintainReportChart',
                templateUrl: 'src/directiveTemplates/maintainReportChart.html',
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
                        text: '保养费用排名',
                        x: '20px'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['保养费用']
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
                        orient: 'vertical',
                        x: '95%'
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        name: '叉车编号',
                        data: ['M5AF00002', 'M5AF00003', 'M5AF00004', 'M5AF00005', 'M5AF00006', 'M5AF00007', 'M5AF00008', 'M5AF00010', 'M5AF00011', 'M5AF00012', 'M5AF00013', 'M5AF00014']
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '费用（元）'
                    }],
                    series: [{
                        name: '保养费用',
                        type: 'bar',
                        data: [233.0, 423.9, 447.0, 243.2, 245.6, 176.7, 135.6, 162.2, 432.6, 220.0, 226.4, 233.3],
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
                    }]
                };

                myChart.setOption(option);

            }
        }
    });
})();
