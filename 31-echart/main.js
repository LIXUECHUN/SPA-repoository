$(function(){
    var myChart = echarts.init($('#main')[0]);
    var xData = [],
        yData = []

    for(var p = 0;p <= 1; p +=0.1){
        xData.push(p);
        if(p === 0 || p === 1){
            yData.push(0);
        }else{
            yData.push(-1 * p * Math.log2(p)-(1-p)*Math.log2(1-p));
        }
    }
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data:xData
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            smooth: true,
            data:yData
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});