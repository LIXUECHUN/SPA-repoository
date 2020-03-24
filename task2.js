$(function(){
    var datas = [
        {
            name: 'Java',
            rank: 1,
            lift: '降',
            Amplitude: -0.0001
        },
        {
            name: 'C',
            rank: 2,
            lift: '升',
            Amplitude: 0.0244
        },
        {
            name: 'Python',
            rank: 3,
            lift: '升',
            Amplitude: 0.0141  
        },
        {
            name: 'C++',
            rank: 4,
            lift: '降',
            Amplitude: -0.0285
        },
        {
            name: 'C#',
            rank: 5,
            lift: '升',
            Amplitude: 0.0207
        },
        {
            name: 'Visual Basic .NET',
            rank: 6,
            lift: '降',
            Amplitude: -0.0117
        },
        {
            name: 'JavaScript',
            rank: 7,
            lift: '降',
            Amplitude: -0.0085
        }
    ];
    var clm = [
        {
            data: 'name',
            type: 'text'
        },
        {
            data: 'rank',
            type: 'numeric'
        },
        {
            data: 'lift',
            type: 'text'
        },
        {
            data: 'Amplitude',
            type: 'numeric',
            numericFormat: {
                pattern: '+0.00%'
            }
        }
    ]
    var tits = [
        '语言名称',
        '排名',
        '升或降',
        '变化幅度'
    ]
    var hElement = document.getElementById('hot');
    var hSettings = {
        data: datas,
        colHeaders:tits,
        columns:clm,
        width: 800,
        autoWrapRow: true,
        height: 400,
        rowHeights: 50,
        maxRows: 30,
        colWidths: 55,
        stretchH: 'all',
        className: "htCenter htMiddle",
        manualRowMove: true,
        manualColumnMove: true,
        rowHeaders: false,
        manualRowResize: true,
        manualColumnResize: true,
        contextMenu: true,
        filters: true
    };
    Handsontable(hElement, hSettings);

    var myChart = echarts.init(document.getElementById('echart'));
    var option = {
        title: {
            text: 'JavaScript语言排名变化'
        },
        tooltip: {},
        xAxis: {
            data: [2000, 2005, 2010, 2015, 2020],
            type: 'category',
            axisPointer: {
                lineStyle: {
                    color: 'grey',
                    opacity: 0.5,
                    width: 2
                },
                label: {
                    show: false,
                },
                handle: {
                    show: true,
                    color: 'transparent'
                }
            },
        },
        
        yAxis: {},
        series: [{
            name: '',
            type: 'line',
            data: [6, 9, 8, 8, 7],
        }],
    };
    myChart.setOption(option);
    })