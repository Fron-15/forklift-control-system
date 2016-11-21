(function() {
    define(['app', 'echarts'], function(app, echarts) {
        app.directive('mapCharts', mapCharts);

        mapCharts.$inject = [];

        function mapCharts() {
            var directive = {
                restrict: 'AE',
                scope: { selectedProvince: '=' },
                templateUrl: 'src/directiveTemplates/mapCharts.html',
                controller: 'mapChartsCtrl',
                controllerAs: 'mapCharts',
                bindToController: true,
                link: link
            };
            return directive;

            function link(scope, element, attrs,parent) {

                var chart = element.find('div')[0];
                //初始化图表
                var myChart = echarts.init(chart);
                //产生随机数
                function randomData() {
                    return Math.round(Math.random() * 1000);
                }
                //图表相关配置
                var option = {
                    title: {
                        text: '用户分布',
                        left: 'left'
                    },
                    tooltip: {
                        trigger: 'item',
                        // position: ['70%', '20%'],
                        // backgroundColor: '#F7DA8B',
                        // padding: ['80'],
                        show:true
                    },
                    visualMap: {
                        min: 0,
                        max: 2000,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'],
                        calculable: true
                    },
                    series: [{
                        name: '用户分布',
                        type: 'map',
                        mapType: 'china',
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [
                            { name: '北京', value: randomData(), },
                            { name: '天津', value: randomData() },
                            { name: '上海', value: randomData() },
                            { name: '重庆', value: randomData() },
                            { name: '河北', value: randomData() },
                            { name: '河南', value: randomData() },
                            { name: '云南', value: randomData() },
                            { name: '辽宁', value: randomData() },
                            { name: '黑龙江', value: randomData() },
                            { name: '湖南', value: randomData() },
                            { name: '安徽', value: randomData() },
                            { name: '山东', value: randomData() },
                            { name: '新疆', value: randomData() },
                            { name: '江苏', value: randomData() },
                            { name: '浙江', value: randomData() },
                            { name: '江西', value: randomData() },
                            { name: '湖北', value: randomData() },
                            { name: '广西', value: randomData() },
                            { name: '甘肃', value: randomData() },
                            { name: '山西', value: randomData() },
                            { name: '内蒙古', value: randomData() },
                            { name: '陕西', value: randomData() },
                            { name: '吉林', value: randomData() },
                            { name: '福建', value: randomData() },
                            { name: '贵州', value: randomData() },
                            { name: '广东', value: randomData() },
                            { name: '青海', value: randomData() },
                            { name: '西藏', value: randomData() },
                            { name: '四川', value: randomData() },
                            { name: '宁夏', value: randomData() },
                            { name: '海南', value: randomData() },
                            { name: '台湾', value: randomData() },
                            { name: '香港', value: randomData() },
                            { name: '澳门', value: randomData() }
                        ]
                    }]
                };

                myChart.setOption(option);
                //图表点击事件
                myChart.on('click', function(params) {
                    var city = params.name;
                    // parent.selectProvince(city);
                });
            }
        }
    });
})();
