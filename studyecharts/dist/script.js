var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

function getVirtulData(year) {
    year = year || '2022';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    data.push(
      [echarts.time.format('yyyy-MM-dd', "2021-08-22"), 0],
      [echarts.time.format('yyyy-MM-dd', "2021-08-23"), 1],
    );
    return data;
}

option = {
    title: {
        top: 30,
        left: 'center',
        text: '今天学习了吗（2021/08/22 - 2021/12/31）'
    },
    tooltip: {},
    visualMap: {
          min: 0,
          max: 1,
          type: 'piecewise',
          orient: 'horizontal',
          left: 'center',
          top: 65,
          show: false,
          inRange: {
                color: ['#C0C0C0','#FFD700']
          },
      },
          
    calendar: {
        top: 80,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2021',
        itemStyle: {
            borderWidth: 0.5
        },
        yearLabel: {show: false}
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData(2021)
    }
};

option && myChart.setOption(option);