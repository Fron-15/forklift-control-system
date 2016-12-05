(function() {
    define(['app','echarts'], function(app,echarts) {
        app.directive('efficiencyDayChart', efficiencyDayChart);

        efficiencyDayChart.$inject = [];

        function efficiencyDayChart() {
            var directive = {
                restrict: 'AE',
                scope: {},
                controller: 'efficiencyDayChartCtrl',
                controllerAs: 'efficiencyDayChart',
                templateUrl: 'src/directiveTemplates/efficiencyDayChart.html',
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
                        text: '日工作效率图',
                        x:'20px'
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
                        name:'时钟',
                        data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
                    }],
                    yAxis: [{
                        type: 'value',
                        name:'工作小时数'
                    }],
                    series: [{
                        name: '闲置',
                        type: 'line',
                        stack: '总量',
                        data: [1,2,0,1.5,2.3,2,1,0,1,0.6,2,2,1.2,1.3,1.5,2,1,1,2,1,2,1,0.5,0.8]
                    }, {
                        name: '使用',
                        type: 'line',
                        stack: '总量',
                        data: [2,2,1.2,1.3,1.5,2,1,1,2,1,1,2,0,1.5,2.3,2,1,0,1,0.6,2,1,0.5,0.8]
                    }]
                };

                myChart.setOption(option);
            }
        }
    });
})();