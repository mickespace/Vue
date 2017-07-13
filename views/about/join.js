require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "bootsnav": "bootstrap/bootsnav",
        "carousel": "carousel/carousel",
        "modernizr": "parallax/modernizr",
        "toolbar": "toolbar/toolbar",
        "lazyload": "jquery/lazyload",
    },
    shim: {
        'vue': {
            export: 'vue'
        },
        'bootstrap': {
            deps: ['jquery'],
            export: 'bootstrap'
        },

        'bootsnav': {
            export: 'bootsnav'
        },
        'carousel': {
            deps: ['jquery'],
            export: 'carousel'
        },
        'toolbar': {
            export: 'toolbar'
        },
        'lazyload': {
            deps: ['jquery'],
            export: 'lazyload'
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'bootsnav', 'carousel', 'modernizr', 'toolbar', 'lazyload'], function (vue, jquery, bootstrap, bootsnav, carousel, modernizr, toolbar, lazyload) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            videoInfo: {
                Title: '这个人是傻逼吗？',
                ImgUrl: 'assets/img/video_bg.jpg',
                VideoUrl: 'assets/video/join.mp4'
            },
            jobInfo: {
                Keyworks: '',
                JobType: '',
                JobArea: '',
                Jobs: [{
                    Id: '1',
                    JobType: '1',
                    JobTypeStr: '社招',
                    Name: 'android工程师',
                    VocationType: '1',
                    VocationTypeStr: '研发类',
                    City: '深圳南山区',
                    IsShow: false,
                    Abstract: '职位描述：<br/> 1、参与需求分析、设计评审，制定测试方案;<br/>2、编写测试用例；<br/>3、自动化测试；<br/>4、测试质量分析与测试方法改进。 <br/>任职要求：<br/>1、3年以上手机测试/APP测试经验；<br/>2、负责APP软件测试，能对测试过程中的缺陷进行数据统计分析；<br/>3、根据需求定义和技术规格能单独编写测试计划、设计测试用例，熟悉软件测试流程；<br/>4、具备自动化测试能力，熟悉C/C++,Java,python等一种或多种语言。'
                }, {
                    Id: '2',
                    JobType: '1',
                    JobTypeStr: '社招',
                    Name: 'android工程师',
                    VocationType: '1',
                    VocationTypeStr: '研发类',
                    City: '深圳南山区',
                    IsShow: false,
                    Abstract: '职位描述：<br/> 1、参与需求分析、设计评审，制定测试方案;<br/>2、编写测试用例；<br/>3、自动化测试；<br/>4、测试质量分析与测试方法改进。 <br/>任职要求：<br/>1、3年以上手机测试/APP测试经验；<br/>2、负责APP软件测试，能对测试过程中的缺陷进行数据统计分析；<br/>3、根据需求定义和技术规格能单独编写测试计划、设计测试用例，熟悉软件测试流程；<br/>4、具备自动化测试能力，熟悉C/C++,Java,python等一种或多种语言。'
                }, {
                    Id: '3',
                    JobType: '1',
                    JobTypeStr: '校园',
                    Name: 'android工程师',
                    VocationType: '1',
                    VocationTypeStr: '研发类',
                    City: '深圳南山区',
                    IsShow: false,
                    Abstract: '职位描述：<br/> 1、参与需求分析、设计评审，制定测试方案;<br/>2、编写测试用例；<br/>3、自动化测试；<br/>4、测试质量分析与测试方法改进。 <br/>任职要求：<br/>1、3年以上手机测试/APP测试经验；<br/>2、负责APP软件测试，能对测试过程中的缺陷进行数据统计分析；<br/>3、根据需求定义和技术规格能单独编写测试计划、设计测试用例，熟悉软件测试流程；<br/>4、具备自动化测试能力，熟悉C/C++,Java,python等一种或多种语言。'
                }, {
                    Id: '4',
                    JobType: '1',
                    JobTypeStr: '校园',
                    Name: 'android工程师',
                    VocationType: '1',
                    VocationTypeStr: '研发类',
                    City: '深圳南山区',
                    IsShow: false,
                    Abstract: '职位描述：<br/> 1、参与需求分析、设计评审，制定测试方案;<br/>2、编写测试用例；<br/>3、自动化测试；<br/>4、测试质量分析与测试方法改进。 <br/>任职要求：<br/>1、3年以上手机测试/APP测试经验；<br/>2、负责APP软件测试，能对测试过程中的缺陷进行数据统计分析；<br/>3、根据需求定义和技术规格能单独编写测试计划、设计测试用例，熟悉软件测试流程；<br/>4、具备自动化测试能力，熟悉C/C++,Java,python等一种或多种语言。'
                }, {
                    Id: '5',
                    JobType: '1',
                    JobTypeStr: '社招',
                    Name: 'android工程师',
                    VocationType: '1',
                    VocationTypeStr: '研发类',
                    City: '深圳南山区',
                    IsShow: false,
                    Abstract: '职位描述：<br/> 1、参与需求分析、设计评审，制定测试方案;<br/>2、编写测试用例；<br/>3、自动化测试；<br/>4、测试质量分析与测试方法改进。 <br/>任职要求：<br/>1、3年以上手机测试/APP测试经验；<br/>2、负责APP软件测试，能对测试过程中的缺陷进行数据统计分析；<br/>3、根据需求定义和技术规格能单独编写测试计划、设计测试用例，熟悉软件测试流程；<br/>4、具备自动化测试能力，熟悉C/C++,Java,python等一种或多种语言。'
                }, {
                    Id: '6',
                    JobType: '1',
                    JobTypeStr: '社招',
                    Name: 'android工程师',
                    VocationType: '1',
                    VocationTypeStr: '研发类',
                    City: '深圳南山区',
                    IsShow: false,
                    Abstract: '职位描述：<br/> 1、参与需求分析、设计评审，制定测试方案;<br/>2、编写测试用例；<br/>3、自动化测试；<br/>4、测试质量分析与测试方法改进。 <br/>任职要求：<br/>1、3年以上手机测试/APP测试经验；<br/>2、负责APP软件测试，能对测试过程中的缺陷进行数据统计分析；<br/>3、根据需求定义和技术规格能单独编写测试计划、设计测试用例，熟悉软件测试流程；<br/>4、具备自动化测试能力，熟悉C/C++,Java,python等一种或多种语言。'
                }, {
                    Id: '7',
                    JobType: '1',
                    JobTypeStr: '校园',
                    Name: 'android工程师',
                    VocationType: '1',
                    VocationTypeStr: '研发类',
                    City: '深圳南山区',
                    IsShow: false,
                    Abstract: '职位描述：<br/> 1、参与需求分析、设计评审，制定测试方案;<br/>2、编写测试用例；<br/>3、自动化测试；<br/>4、测试质量分析与测试方法改进。 <br/>任职要求：<br/>1、3年以上手机测试/APP测试经验；<br/>2、负责APP软件测试，能对测试过程中的缺陷进行数据统计分析；<br/>3、根据需求定义和技术规格能单独编写测试计划、设计测试用例，熟悉软件测试流程；<br/>4、具备自动化测试能力，熟悉C/C++,Java,python等一种或多种语言。'
                }, {
                    Id: '8',
                    JobType: '1',
                    JobTypeStr: '社招',
                    Name: 'android工程师',
                    VocationType: '1',
                    VocationTypeStr: '研发类',
                    City: '深圳南山区',
                    IsShow: false,
                    Abstract: '职位描述：<br/> 1、参与需求分析、设计评审，制定测试方案;<br/>2、编写测试用例；<br/>3、自动化测试；<br/>4、测试质量分析与测试方法改进。 <br/>任职要求：<br/>1、3年以上手机测试/APP测试经验；<br/>2、负责APP软件测试，能对测试过程中的缺陷进行数据统计分析；<br/>3、根据需求定义和技术规格能单独编写测试计划、设计测试用例，熟悉软件测试流程；<br/>4、具备自动化测试能力，熟悉C/C++,Java,python等一种或多种语言。'
                }]
            },
            methods: {
                handleJobShow: function (jobId) {
                    for (var i = 0; i < app.jobInfo.Jobs.length; i++) {
                        if (app.jobInfo.Jobs[i].Id == jobId) {
                            app.jobInfo.Jobs[i].IsShow = !app.jobInfo.Jobs[i].IsShow;
                        } else {
                            app.jobInfo.Jobs[i].IsShow = false;
                        }
                    }
                }
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});