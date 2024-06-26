var myChart = echarts.init(document.getElementById('part0302'),'theme');

var option;

var dataBJ = [
  ['藏酋猴', 407, 2.16, 'II', '是', '否', '否'],
  ['猕猴', 44, 0.28, 'II', '否', '否', '否'],
  ['川金丝猴', 228, 1.35, 'I', '是', '否', '否'],
  ['豪猪', 135, 0.79, '无', '否', '否', '否'],
  ['喜马拉雅早獭', 10, 0.07, '无', '否', '否', '否'],
  // ['隐纹花松鼠', 0, 0, '无', '否', '否', '否'],
  // ['赤腹松鼠', 0, 0, '无', '否', '否', '否'],
  // ['红白語鼠', 0, 0, '无', '否', '否', '否'],
  // ['灰头鼯鼠', 0, 0, '无', '否', '否', '否'],
  // ['岩松鼠', 0, 0, '无', '否', '否', '否'],
  ['中华竹鼠', 64, 0.47, '无', '否', '否', '是'],
  ['小麂', 82, 0.5, '无', '是', '否', '否'],
  // ['马鹿', 0, 0, 'II', '否', '否', '否'],
  ['梅花鹿', 13, 0.07, 'I', '否', '否', '否'],
  ['水鹿', 520, 1.9, 'II', '否', '否', '否'],
  ['毛冠鹿', 915, 5.61, 'II', '否', '否', '否'],
  // ['狍', 0, 0, '无', '否', '否', '否'],
  ['斑羚', 1706, 9.25, 'II', '否', '否', '否'],
  ['鬣羚', 1041, 6, 'II', '否', '否', '否'],
  ['羚牛', 2549, 10.72, 'I', '否', '否', '是'],
  // ['岩羊', 0, 0, 'II', '否', '否', '否'],
  ['林麝', 321, 2.04, 'I', '否', '否', '否'],
  // ['马麝', 0, 0, 'I', '否', '否', '否'],
  ['野猪', 2039, 10.26, '无', '否', '否', '是'],
  ['花面狸', 20, 0.15, '无', '否', '否', '否'],
  // ['大灵猫', 0, 0, 'I', '否', '否', '否'],
  // ['小灵猫', 0, 0, 'I', '否', '否', '否'],
  ['豹猫', 531, 3.76, 'II', '否', '是', '否'],
  // ['豹', 0, 0, 'I', '否', '是', '否'],
  // ['雪豹', 0, 0, 'I', '否', '否', '否'],
  ['金猫', 18, 0.12, 'I', '否', '是', '否'],
  // ['猞猁', 0, 0, 'II', '否', '是', '否'],
  // ['云豹', 0, 0, 'I', '否', '是', '否'],
  // ['豺', 0, 0, 'I', '否', '是', '否'],
  ['赤狐', 28, 0.15, '无', '否', '是', '否'],
  ['狼', 11, 0.08, 'II', '否', '是', '否'],
  ['小熊猫', 803, 4.49, 'II', '否', '否', '是'],
  ['黑熊', 758, 3.82, 'II', '否', '否', '是'],
  // ['棕熊', 0, 0, 'II', '否', '否', '否'],
  // ['青鼬(黄喉貂)', 0, 0, 'II', '否', '是', '否'],
  // ['狗獾', 0, 0, '无', '否', '否', '否'],
  // ['鼬獾', 0, 0, '无', '否', '否', '否'],
  // ['黄鼬', 0, 0, '无', '否', '否', '否'],
  // ['令鼬', 0, 0, '无', '否', '否', '否'],
  ['猪獾', 168, 1.03, '无', '否', '否', '否'],
  // ['藏鼠兔', 0, 0, '无', '否', '否', '否'],
  // ['草兔', 0, 0, '无', '否', '否', '否'],
  // ['斑尾榛鸡', 0, 0, 'I', '是', '否', '否'],
  ['绿尾虹雉', 51, 0.3, 'II', '是', '否', '否'],
  ['红腹角雉', 261, 1.62, 'II', '否', '否', '否'],
  ['白腹锦鸡', 88, 0.56, 'II', '否', '否', '否'],
  ['红腹锦鸡', 103, 0.63, 'II', '是', '否', '否'],
  ['白马鸡', 13, 0.07, 'II', '是', '否', '否'],
  ['蓝马鸡', 47, 0.23, 'II', '是', '否', '否'],
  // ['四川山鹧鸪', 0, 0, 'I', '是', '否', '否'],
  ['勺鸡', 17, 0.12, 'II', '否', '否', '否'],
  // ['白鹇', 0, 0, 'II', '否', '否', '否'],
  // ['雪鹑', 0, 0, '无', '否', '否', '否'],
  ['血雉', 92, 0.47, 'II', '否', '否', '否'],
  // ['白冠长尾雉', 0, 0, 'I', '是', '否', '否'],
  ['雉鹑', 50, 0.29, 'I', '是', '否', '否'],
  // ['雉鸡', 0, 0, '无', '否', '否', '否'],
  // ['灰胸竹鸡', 0, 0, '无', '是', '否', '否']
];

var dataGZ = [
  ['藏酋猴', 407, 2.16, 'II', '是', '否', '否'],
  // ['猕猴', 0, 0, 'II', '否', '否', '否'],
  ['川金丝猴', 659, 14.02, 'I', '是', '否', '否'],
  ['豪猪', 22, 0.67, '无', '否', '否', '否'],
  // ['喜马拉雅早獭', 0, 0, '无', '否', '否', '否'],
  // ['隐纹花松鼠', 0, 0, '无', '否', '否', '否'],
  // ['赤腹松鼠', 0, 0, '无', '否', '否', '否'],
  // ['红白語鼠', 0, 0, '无', '否', '否', '否'],
  // ['灰头鼯鼠', 0, 0, '无', '否', '否', '否'],
  // ['岩松鼠', 0, 0, '无', '否', '否', '否'],
  ['中华竹鼠', 17, 0.62, '无', '否', '否', '是'],
  ['小麂', 145, 4.87, '无', '是', '否', '否'],
  // ['马鹿', 0, 0, 'II', '否', '否', '否'],
  // ['梅花鹿', 0, 0, 'I', '否', '否', '否'],
  // ['水鹿', 0, 0, 'II', '否', '否', '否'],
  ['毛冠鹿', 148, 5.37, 'II', '否', '否', '否'],
  // ['狍', 0, 0, '无', '否', '否', '否'],
  ['斑羚', 3123, 61.02, 'II', '否', '否', '否'],
  ['鬣羚', 684, 19.43, 'II', '否', '否', '否'],
  ['羚牛', 3619, 53.33, 'I', '否', '否', '是'],
  // ['岩羊', 0, 0, 'II', '否', '否', '否'],
  ['林麝', 121, 3.87, 'I', '否', '否', '否'],
  // ['马麝', 0, 0, 'I', '否', '否', '否'],
  ['野猪', 994, 24.29, '无', '否', '否', '是'],
  ['花面狸', 16, 0.58, '无', '否', '否', '否'],
  // ['大灵猫', 0, 0, 'I', '否', '否', '否'],
  // ['小灵猫', 0, 0, 'I', '否', '否', '否'],
  ['豹猫', 265, 8.19, 'II', '否', '是', '否'],
  // ['豹', 0, 0, 'I', '否', '是', '否'],
  // ['雪豹', 0, 0, 'I', '否', '否', '否'],
  ['金猫', 12, 0.42, 'I', '否', '是', '否'],
  // ['猞猁', 0, 0, 'II', '否', '是', '否'],
  // ['云豹', 0, 0, 'I', '否', '是', '否'],
  // ['豺', 0, 0, 'I', '否', '是', '否'],
  // ['赤狐', 0, 0, '无', '否', '是', '否'],
  // ['狼', 0, 0, 'II', '否', '是', '否'],
  // ['小熊猫', 0, 0, 'II', '否', '否', '是'],
  ['黑熊', 189, 6.16, 'II', '否', '否', '是'],
  // ['棕熊', 0, 0, 'II', '否', '否', '否'],
  // ['青鼬（黄喉貂）', 0, 0, 'II', '否', '是', '否'],
  ['狗獾', 10, 0.37, '无', '否', '否', '否'],
  // ['鼬獾', 0, 0, '无', '否', '否', '否'],
  // ['黄鼬', 0, 0, '无', '否', '否', '否'],
  // ['令鼬', 0, 0, '无', '否', '否', '否'],
  ['猪獾', 22, 0.87, '无', '否', '否', '否'],
  // ['藏鼠兔', 0, 0, '无', '否', '否', '否'],
  // ['草兔', 0, 0, '无', '否', '否', '否'],
  // ['斑尾榛鸡', 0, 0, 'I', '是', '否', '否'],
  // ['绿尾虹雉', 0, 0, 'II', '是', '否', '否'],
  ['红腹角雉', 63, 2.33, 'II', '否', '否', '否'],
  // ['白腹锦鸡', 0, 0, 'II', '否', '否', '否'],
  ['红腹锦鸡', 136, 4.74, 'II', '是', '否', '否'],
  // ['白马鸡', 0, 0, 'II', '是', '否', '否'],
  // ['蓝马鸡', 0, 0, 'II', '是', '否', '否'],
  // ['四川山鹧鸪', 0, 0, 'I', '是', '否', '否'],
  // ['白鹇', 0, 0, 'II', '否', '否', '否'],
  // ['雪鹑', 0, 0, '无', '否', '否', '否'],
  ['血雉', 54, 1.71, 'II', '否', '否', '否'],
  // ['白冠长尾雉', 0, 0, 'I', '是', '否', '否'],
  // ['雉鹑', 0, 0, 'I', '是', '否', '否'],
  ['雉鸡', 31, 1.08, '无', '否', '否', '否'],
  // ['灰胸竹鸡', 0, 0, '无', '是', '否', '否']
];

var dataSH = [
  ['藏酋猴', 13, 0.88, 'II', '是', '否', '否'],
  // ['猕猴', 0, 0, 'II', '否', '否', '否'],
  ['川金丝猴', 55, 2.71, 'I', '是', '否', '否'],
  ['豪猪', 12, 0.88, '无', '否', '否', '否'],
  // ['喜马拉雅早獭', 0, 0, '无', '否', '否', '否'],
  // ['隐纹花松鼠', 0, 0, '无', '否', '否', '否'],
  // ['赤腹松鼠', 0, 0, '无', '否', '否', '否'],
  // ['红白語鼠', 0, 0, '无', '否', '否', '否'],
  // ['灰头鼯鼠', 0, 0, '无', '否', '否', '否'],
  // ['岩松鼠', 0, 0, '无', '否', '否', '否'],
  ['中华竹鼠', 13, 0.73, '无', '否', '否', '是'],
  ['小麂', 10, 0.37, '无', '是', '否', '否'],
  // ['马鹿', 0, 0, 'II', '否', '否', '否'],
  ['梅花鹿', 20, 0.66, 'I', '否', '否', '否'],
  // ['水鹿', 0, 0, 'II', '否', '否', '否'],
  ['毛冠鹿', 264, 13.65, 'II', '否', '否', '否'],
  // ['狍', 0, 0, '无', '否', '否', '否'],
  ['斑羚', 573, 24.06, 'II', '否', '否', '否'],
  ['鬣羚', 264, 11.37, 'II', '否', '否', '否'],
  ['羚牛', 711, 25.97, 'I', '否', '否', '是'],
  ['岩羊', 79, 4.18, 'II', '否', '否', '否'],
  ['林麝', 67, 3.3, 'I', '否', '否', '否'],
  // ['马麝', 0, 0, 'I', '否', '否', '否'],
  ['野猪', 364, 18.56, '无', '否', '否', '是'],
  // ['花面狸', 0, 0, '无', '否', '否', '否'],
  // ['大灵猫', 0, 0, 'I', '否', '否', '否'],
  // ['小灵猫', 0, 0, 'I', '否', '否', '否'],
  ['豹猫', 67, 4.26, 'II', '否', '是', '否'],
  // ['豹', 0, 0, 'I', '否', '是', '否'],
  // ['雪豹', 0, 0, 'I', '否', '否', '否'],
  // ['金猫', 0, 0, 'I', '否', '是', '否'],
  // ['猞猁', 0, 0, 'II', '否', '是', '否'],
  // ['云豹', 0, 0, 'I', '否', '是', '否'],
  // ['豺', 0, 0, 'I', '否', '是', '否'],
  // ['赤狐', 0, 0, '无', '否', '是', '否'],
  // ['狼', 0, 0, 'II', '否', '是', '否'],
  // ['小熊猫', 0, 0, 'II', '否', '否', '是'],
  ['黑熊', 143, 6.38, 'II', '否', '否', '是'],
  // ['棕熊', 0, 0, 'II', '否', '否', '否'],
  // ['青鼬(黄喉貂)', 0, 0, 'II', '否', '是', '否'],
  // ['狗獾', 0, 0, '无', '否', '否', '否'],
  // ['鼬獾', 0, 0, '无', '否', '否', '否'],
  // ['黄鼬', 0, 0, '无', '否', '否', '否'],
  // ['令鼬', 0, 0, '无', '否', '否', '否'],
  ['猪獾', 39, 2.49, '无', '否', '否', '否'],
  // ['藏鼠兔', 0, 0, '无', '否', '否', '否'],
  // ['草兔', 0, 0, '无', '否', '否', '否'],
  // ['斑尾榛鸡', 0, 0, 'I', '是', '否', '否'],
  // ['绿尾虹雉', 0, 0, 'II', '是', '否', '否'],
  ['红腹角雉', 19, 1.17, 'II', '否', '否', '否'],
  // ['白腹锦鸡', 0, 0, 'II', '否', '否', '否'],
  ['红腹锦鸡', 18, 1.25, 'II', '是', '否', '否'],
  // ['白马鸡', 0, 0, 'II', '是', '否', '否'],
  ['蓝马鸡', 87, 4.7, 'II', '是', '否', '否'],
  // ['四川山鹧鸪', 0, 0, 'I', '是', '否', '否'],
  ['勺鸡', 19, 1.39, 'II', '否', '否', '否'],
  // ['白鹇', 0, 0, 'II', '否', '否', '否'],
  // // ['雪鹑', 0, 0, '无', '否', '否', '否'],
  ['血雉', 52, 3.3, 'II', '否', '否', '否'],
  // ['白冠长尾雉', 0, 0, 'I', '是', '否', '否'],
  // ['雉鹑', 0, 0, 'I', '是', '否', '否'],
  ['雉鸡', 11, 0.81, '无', '否', '否', '否'],
  // ['灰胸竹鸡', 0, 0, '无', '是', '否', '否']
];
var schema = [
  { name: 'date', index: 0, text: '名字' },
  { name: 'AQIindex', index: 1, text: '实体痕迹' },
  { name: 'PM25', index: 2, text: '样线遇见率' },
  { name: 'PM10', index: 3, text: '保护级别' },
  { name: 'CO', index: 4, text: ' 中国特有' },
  { name: 'NO2', index: 5, text: '危害等级' },
  { name: 'SO2', index: 6, text: '竞食关系' }
];
const itemStyle = {
  opacity: 0.8,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: 'rgba(0,0,0,0.3)'
};
option = {
  color: ['#dd4444', '#fec42c', '#80F1BE'],
  legend: {
    top: 10,
    data: ['四川', '甘肃', '陕西'],
    textStyle: {
      fontSize: 16
    }
  },
  title: {
    text: "大熊猫伴生动物分布介绍图",
    textStyle: { // 标题样式  
        fontSize: 16, // 字体大小设置为20  
        // 其他样式属性，如颜色、字体类型等也可以在这里设置  
    }  
    
},
  grid: {
    left: '10%',
    right: 150,
    top: '18%',
    bottom: '15%'
  },
  tooltip: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    formatter: function (param) {
      var value = param.value;
      // prettier-ignore
      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[0] 
               // + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '%<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
                + schema[6].text + '：' + value[6] + '<br>';
    }
  },
 
  yAxis: {
    type: 'value',
    name: '实体痕迹',
    nameLocation: 'end',
    nameGap: 20,
    nameTextStyle: {
      fontSize: 16
    },
    splitLine: {
      show: false
    }
  },
  xAxis: {
    type: 'category',
    name: '物种',
    nameGap: 10,
    nameTextStyle: {
      fontSize: 1
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      interval: 0,
      rotate:70
    }
  },
  visualMap: [
    {
      left: 'right',
      top: '40%',
      dimension: 2,
      min: 0,
      max: 30,
      itemWidth: 30,
      itemHeight: 120,
      calculable: true,
      precision: 0.1,
      text: ['圆形大小：遇见率'],
      textGap: 20,
      inRange: {
        symbolSize: [10, 50]
      },
      outOfRange: {
        symbolSize: [10, 70],
        color: ['rgba(255,255,255,0.4)']
      },
      controller: {
        inRange: {
           color: [ "#96c02f"]
        
        },
        outOfRange: {
         color: [ "#83962f" ]
        }
      }
    },
    // {
    //   left: 'right',
    //   bottom: '5%',
    //   dimension: 1, //暂时使用样线遇见率
    //   min: 0,
    //   max: 50,
    //   itemHeight: 120,
    //   text: ['明暗：实体痕迹'],
    //   textGap: 20,
    //   inRange: {
    //     colorLightness: [0.9, 0.5]
    //   },
    //   outOfRange: {
    //     color: ['rgba(255,255,255,0.4)']
    //   },
    //   controller: {
    //     inRange: {
    //       color: ['#c23531']
    //     },
    //     outOfRange: {
    //       color: ['#999']
    //     }
    //   }
    // }
  ],
  color: [
    "#43b244",
    "#96c24e",
    "#356b31",
    "#d4fde7",
    "#6dba49",
    "#3c8f3b",
    "#b5e09b",
    "#26231e"
  ],
  series: [
    {
      name: '四川',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataBJ
    },
    {
      name: '甘肃',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataSH
    },
    {
      name: '陕西',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataGZ
    },
    {
      height:380,
      width:800

    }
  ]
};

option && myChart.setOption(option);
