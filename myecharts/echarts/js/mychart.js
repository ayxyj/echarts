/*柱形图1*/
(function () {
    var element = document.querySelector(".bar .chart");
    var myChart = echarts.init(element);
    var option = {
        /*柱状图颜色*/
        color: ["#1d7ac4"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["河南省人民医院", "郑州市人民医院", "河南省中医院", "郑大第三附属医院", "郑州大学"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "#fff",
                    fontSize: "12",
                    //解决命名过长，隔一个显示问题
                    interval: 0,
                    //rotate: 45, //代表逆时针旋转45度
                },
                //x轴不显示
                axisLine: {
                    show: false
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 12
                },
                //y轴线
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)",
                        // width: 1,
                        // type: "solid"
                    }
                },
                //y轴分割线样式
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '用户数',
                type: 'bar',
                //柱子宽度
                barWidth: '35%',
                data: [25, 12, 16, 8, 17],
                //柱子圆角
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };

    myChart.setOption(option);
    /*解决图表不跟随屏幕自适应问题*/
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

/*柱形图2*/
(function () {
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var element1 = document.querySelector(".bar2 .chart");
    var myChart = echarts.init(element1);
    var option = {
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
            //是否包含label的距离
            containLabel: false
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
                /*不显示xlabel*/
                show: false
            },
            //不显示分割线
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: [
            {
                type: 'category',
                data: ["河南省人民医院", "郑州市人民医院", "河南省中医院", "郑大第三附属医院", "郑州大学"],
                //y轴线不显示
                axisLine: {
                    show: false
                },
                //不显示刻度
                axisTick: {
                    show: false
                },
                //y轴label
                axisLabel: {
                    color: "#fff"
                },
            }, {
                type: 'category',
                data: [25, 12, 24, 52, 32],
                //y轴线不显示
                axisLine: {
                    show: false
                },
                //不显示刻度
                axisTick: {
                    show: false
                },
                //y轴label
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                data: [25, 12, 24, 52, 32, 60],
                // 柱子设为圆角
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function (params) {
                            // params 传进来的是柱子对象
                            //console.log(params);
                            // dataIndex 是当前柱子的索引号
                            return myColor[params.dataIndex];
                        }
                    }
                },
                // 图形上的文本标签
                label: {
                    normal: {
                        show: true,
                        // 图形内显示
                        position: "inside",
                        // 文字的显示格式
                        formatter: "{c}%"
                    }
                },
                // 柱子堆叠
                yAxisIndex: 0
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50, //柱子的间距
                barWidth: 15, //柱子的粗细
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100, 100],
                // 柱子堆叠
                yAxisIndex: 1
            }
        ]
    };
    myChart.setOption(option);
    /*自适应屏幕*/
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


/*折线图*/
(function () {
    var yearData = [
        {
            year: '2020',  // 年份
            data: [  // 几个数组是因为几两条线
                [24, 40, 101, 134, 90],
                [230, 210, 230, 120, 230],
                [210, 120, 180, 79, 82],
                [40, 64, 191, 324, 290],
                [330, 310, 213, 180, 200]
            ]
        },
        {
            year: '2021',  // 年份
            data: [  // 几个数组是因为有几条线
                [123, 175, 112, 197, 121],
                [67, 98, 21, 43, 64],
                [76, 38, 19, 34, 88],
                [143, 131, 165, 123, 178],
                [21, 82, 64, 43, 60]
            ]
        }
    ];
    var element2 = document.querySelector(".line .chart");
    var myChart = echarts.init(element2);
    var option = {
        color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]//图例文字颜色
            },
            data: ["河南省人民医院", "郑州市人民医院", "河南省中医院", "郑大第三附属医院", "郑州大学"],
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                show: false,
                color: '#4c9bfd',// 文本颜色
                interval: 0, //坐标label显示不全
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false, // 去除轴内间距
            data: ["河南省人民医院", "郑州市人民医院", "河南省中医院", "郑大第三附属医院", "郑州大学"],
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd',// 文本颜色
                interval: 0, //坐标label显示不全
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [
            {
                name: '河南省人民医院',
                type: 'line',
                // 折线修饰为圆滑
                smooth: true,
                data: yearData[0].data[0]
            },
            {
                name: '郑州市人民医院',
                type: 'line',
                smooth: true,
                data: yearData[0].data[1]
            },
            {
                name: '河南省中医院',
                type: 'line',
                // 折线修饰为圆滑
                smooth: true,
                data: yearData[0].data[2]
            },
            {
                name: '郑大第三附属医院',
                type: 'line',
                // 折线修饰为圆滑
                smooth: true,
                data: yearData[0].data[3]
            },
            {
                name: '郑州大学',
                type: 'line',
                // 折线修饰为圆滑
                smooth: true,
                data: yearData[0].data[4]
            }
        ]
    };

    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    // 5.点击切换效果
    $(".line h2").on("click", "a", function () {
        alert(1);
        console.log($(this).index());
        // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
        console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        option.series[2].data = obj.data[2];
        option.series[3].data = obj.data[3];
        option.series[4].data = obj.data[4];
        // 需要重新渲染
        myChart.setOption(option);
    });
})();

/*折线图2*/
(function () {

    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            },
            data: ["河南省人民医院", "郑州市人民医院", "河南省中医院", "郑大第三附属医院", "郑州大学"],
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    },
                    interval: 0,
                },
                // x轴线的颜色为   rgba(255,255,255,.2)
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },

                data: ["河南省人民医院", "郑州市人民医院", "河南省中医院", "郑大第三附属医院", "郑州大学"],
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                // 修改分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '河南省人民医院',
                type: 'line',
                //第一条 线是圆滑
                smooth: true,
                // 单独修改线的样式
                lineStyle: {
                    color: "#0184d5",
                    width: 2
                },
                // 填充区域
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },
                data: [123, 175, 112, 197, 121],

            },
            {
                name: '郑州市人民医院',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                smooth: true,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },
                data: [67, 98, 21, 43, 64],

            },
            {
                name: '河南省中医院',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#b942d2",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(139,65,182,0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(119,9,237,0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#b942d2",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },
                data: [76, 38, 19, 34, 88],

            },
            {
                name: '郑大第三附属医院',
                type: 'line',
                smooth: true,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(212,37,116,0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(189,27,89,0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#b3115f",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },
                data: [143, 131, 165, 123, 178],

            },
            {
                name: '郑州大学',
                type: 'line',
                label: {
                    show: true,
                    position: 'top'
                },
                smooth: true,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(218,118,56,0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(174,138,54,0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#b78436",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                emphasis: {
                    focus: 'series'
                },
                data: [21, 82, 64, 43, 60]
            }
        ]
    };
    myChart.setOption(option);

    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


/*饼状图*/
(function () {

    var init = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ["40%", "60%"],
                center: ["50%", "40%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center',
                },
                labelLine: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '10',
                        fontWeight: 'bold'
                    }
                },
                data: [
                    {value: 1048, name: '河南省人民医院'},
                    {value: 735, name: '郑州市人民医院'},
                    {value: 580, name: '河南省中医院'},
                    {value: 484, name: '郑大第三附属医院'},
                    {value: 300, name: '郑州大学'}
                ]
            }
        ]
    };
    init.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        init.resize();
    });
})();


/*饼状图2*/
(function () {
    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    var option = {
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '面积模式',
                type: 'pie',
                radius: ['20%', '80%'],
                center: ['50%', '45%'],
                roseType: 'area', // roseType: "radius", 半径模式
                itemStyle: {
                    borderRadius: 8
                },
                // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
                label: {
                    fontSize: 10
                },
                //引导线
                labelLine: {
                    //连接扇形图的线长
                    length: 6,
                    length2: 8,
                },
                data: [
                    {value: 20, name: '河南'},
                    {value: 26, name: '北京'},
                    {value: 24, name: '山东'},
                    {value: 25, name: '河北'},
                    {value: 20, name: '江苏'},
                    {value: 25, name: '浙江'},
                    {value: 30, name: '四川'},
                    {value: 42, name: '安徽'}
                ]
            }
        ]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

/*map地图*/
(function () {
    var myChart = echarts.init(document.querySelector(".map .chart"));
    var uploadedDataURL = "/vue-first/chapter2/echarts/map/myjson/河南省.json";
    // var uploadedDataURL = "/vue-first/chapter2/echarts/map/myjson/郑州市.json";
    // var uploadedDataURL = "/vue-first/chapter2/echarts/map/myjson/中国.json";
    var geoGpsMap = {
        '1': [113.64964385, 34.7566100641]
    };
    var geoCoordMap = {
        '郑州': [113.64964385, 34.7566100641],
        '洛阳': [112.447524769, 34.6573678177],
        '濮阳': [115.026627441, 35.7532978882],
        '南阳': [112.542841901, 33.0114195691],
        "商丘": [115.641885688, 34.4385886402],
        '许昌': [113.83531246, 34.0267395887],
        '信阳': [114.085490993, 32.1285823075],
        //'开封': [114.351642118, 34.8018541758],
        // '平顶山': [113.300848978, 33.7453014565],
        // '安阳': [114.351806508, 36.1102667222],
        // '鹤壁': [114.297769838, 35.7554258742],
        //'新乡': [113.912690161, 35.3072575577],
        // '焦作': [113.211835885, 35.234607555],
        // '漯河': [114.0460614, 33.5762786885],
        // '三门峡': [111.181262093, 34.7833199411],
        // '周口': [114.654101942, 33.6237408181],
        // '驻马店': [114.049153547, 32.9831581541]
    };
    /*
    var geoCoordMap = {
        '台湾': [121.5135, 25.0308],
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京市': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [121.4648, 31.2891],
    };*/

    var colors = [
        ["#46ead7", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
        ["#37A2DA", "#67e0e3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
        ["#DD6B66", "#759AA0", "#e69d87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
    ];
    var colorIndex = 0;
    $(function () {
        //年份
        var year = ["2021"];
        //地图数据
        var mapData = [
            []
        ];

        /*柱子Y名称*/
        var categoryData = [];
        var barData = [];//柱子数据
        for (var key in geoCoordMap) {
            //categoryData.push(key);
            mapData[0].push({
                "year": '2021',
                "name": key,
                "value": randomNum(100, 200) //闪烁点大小
            });
        }
        for (var i = 0; i < mapData.length; i++) {
            barData.push([]);
            for (var j = 0; j < mapData[i].length; j++) {
                barData[i].push(mapData[i][j].value)
            }
        }
        $.getJSON(uploadedDataURL, function (geoJson) {
            echarts.registerMap('china', geoJson);
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            var convertToLineData = function (data, gps) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = geoCoordMap[dataItem.name];
                    debugger;
                    var toCoord = gps; //郑州
                    //  var toCoord = geoGps[Math.random()*3];
                    if (fromCoord && toCoord) {
                        res.push([{
                            coord: fromCoord,
                            value: dataItem.value
                        }, {
                            coord: toCoord,
                        }]);
                    }
                }
                return res;
            };

            var optionXyMap01 = {
                //时间线
                timeline: {
                    data: year,
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 3000,
                    left: '20%',
                    right: '20%',
                    bottom: '0%',
                    width: '50%',
                    //  height: null,
                    label: {
                        normal: {
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    symbolSize: 10,
                    lineStyle: {
                        color: '#555'
                    },
                    checkpointStyle: {
                        borderColor: '#777',
                        borderWidth: 2
                    },
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {
                            color: '#666',
                            borderColor: '#666'
                        },
                        emphasis: {
                            color: '#aaa',
                            borderColor: '#aaa'
                        }
                    },
                },
                baseOption: {
                    animation: true,
                    animationDuration: 1000,
                    animationEasing: 'cubicInOut',
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: 'cubicInOut',
                    //柱状图
                    grid: {
                        right: '2%',
                        top: '15%',
                        bottom: '10%',
                        width: '20%'
                    },
                    tooltip: {
                        trigger: 'axis', // hover触发器
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {
                                color: 'rgba(150,150,150,0.1)' //hover颜色
                            }
                        }
                    },
                    geo: {
                        show: true,
                        map: 'china',
                        roam: true,
                        //限制zoom的缩放范围
                        scaleLimit: {
                            min: 3,
                            max: 5
                        },
                        zoom: 4,
                        center: [113.83531246, 34.0267395887],
                        label: {
                            //是否显示每个区域的名称
                            show: false,
                            position: 'top',
                            emphasis: {
                                show: false
                            }
                        },
                        selectedMode: false,//区域是否能选中
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(147, 235, 248, 0.5)',
                                borderWidth: 1,
                                // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(147, 235, 248, 0.2)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                shadowColor: 'rgba(128, 217, 248, 1)',
                                // shadowColor: 'rgba(255, 255, 255, 1)',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10
                            },
                            emphasis: {
                                areaColor: '#76c6dd',//鼠标浮动后的颜色
                                borderWidth: 0
                            }
                        }
                    },
                },
                options: []
            };
            //柱状图
            for (var n = 0; n < year.length; n++) {
                optionXyMap01.options.push({
                    /*title: [
                        {
                            id: 'statistic',
                            text: year[n] + "年医疗区块链网络",
                            left: '35%',
                            top: '2%',
                            textStyle: {
                                color: '#ffffff',
                                fontSize: 25
                            }
                        }
                    ],*/
                    xAxis: {
                        type: 'value',
                        scale: true,
                        position: 'top',
                        min: 0,
                        boundaryGap: false,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            margin: 2,
                            textStyle: {
                                color: '#aaa'
                            }
                        },
                    },
                    yAxis: {
                        type: 'category',
                        //  name: 'TOP 20',
                        nameGap: 16,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        axisLabel: {
                            show: false,
                            interval: 0,
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        data: categoryData
                    },
                    series: [
                        //未知作用
                        {
                            //文字和标志
                            name: 'light',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            data: convertData(mapData[n]),
                            symbolSize: function (val) {
                                return val[2] / 10;
                            },
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: colors[colorIndex][n]
                                }
                            }
                        },
                        //地图点的动画效果
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(mapData[n].sort(function (a, b) {
                                return b.value - a.value;
                            }).slice(0, 20)),
                            symbolSize: function (val) {
                                return val[2] / 10;
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    areaColor: '#142957',
                                    color: colors[colorIndex][n],
                                    shadowBlur: 50,
                                    shadowColor: colors[colorIndex][n]
                                },
                                emphasis: {
                                    areaColor: '#0b1c2d'
                                }
                            },
                            zlevel: 1
                        },
                        //地图线的动画效果
                        /* {
                             type: 'lines',
                             zlevel: 2,
                             effect: {
                                 show: true,
                                 period: 4, //箭头指向速度，值越小速度越快
                                 trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                                 symbol: 'arrow', //箭头图标
                                 symbolSize: 3, //图标大小
                             },
                             lineStyle: {
                                 normal: {
                                     color: colors[colorIndex][n],
                                     width: 0.1, //尾迹线条宽度
                                     opacity: 0.5, //尾迹线条透明度
                                     curveness: .3 //尾迹线条曲直度
                                 }
                             },
                             data: convertToLineData(mapData[n], geoGpsMap[1])
                         },*/
                        /* //柱状图
                         {
                             zlevel: 1.5,
                             type: 'bar',
                             symbol: 'none',
                             itemStyle: {
                                 normal: {
                                     color: colors[colorIndex][n]
                                 }
                             },
                             data: barData[n]
                         }*/
                    ]
                })
            }
            myChart.setOption(optionXyMap01);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        });
    });


    function randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    }
})();
