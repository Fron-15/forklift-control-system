(function() {
    define(['app','echarts'], function(app,echarts) {
        app.directive('repairReportChart', repairReportChart);

        repairReportChart.$inject = [];

        function repairReportChart() {
            var directive = {
                restrict: 'AE',
                scope: {},
                controller: 'repairReportChartCtrl',
                controllerAs: 'repairReportChart',
                templateUrl: 'src/directiveTemplates/repairReportChart.html',
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
                        text: '维修费用排名',
                        x: '20px'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['维修费用']
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
                        name: '维修费用',
                        type: 'bar',
                        data: [2333.0, 4223.9, 4247.0, 2443.2, 2545.6, 1776.7, 1357.6, 1762.2, 4932.6, 2230.0, 2263.4, 4233.3],
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
