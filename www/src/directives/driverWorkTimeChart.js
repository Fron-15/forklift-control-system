(function() {
    define(['app', 'echarts'], function(app, echarts) {
        app.directive('driverWorkTimeChart', driverWorkTimeChart);

        driverWorkTimeChart.$inject = [];

        function driverWorkTimeChart() {
            var directive = {
                restrict: 'AE',
                scope: {},
                controller: 'driverWorkTimeChartCtrl',
                controllerAs: 'driverWorkTimeChart',
                templateUrl: 'src/directiveTemplates/driverWorkTimeChart.html',
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
                        text: '司机工作小时数',
                        x: '20px'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['统计期间工作小时数']
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
                        name:'司机姓名',
                        data: ['李朝金', '李朝金', '李朝金', '李朝金', '李朝金', '李朝金', '李朝金', '李朝金', '李朝金', '李朝金', '李朝金', '李朝金']
                    }],
                    yAxis: [{
                        type: 'value',
                        name:'工作小时数'
                    }],
                    series: [{
                        name: '统计期间工作小时数',
                        type: 'bar',
                        smooth:true,
                         itemStyle: {normal: {areaStyle: {type: 'default'}}},
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
                    }]
                };

                myChart.setOption(option);

            }
        }
    });
})();
