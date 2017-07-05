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

            companyInfo: {
                Title: '公司简介',
                Abstract: '  深圳筑星科技有限公司以工程领域信息化为驱动，以智慧城市为目标，公司专注于工程领域施工与运维阶段的BIM服务，致力于建设领域 BIM及信息技术的产品与服务，具有深厚的行业背景和丰富的从业经验。公司核心团队由毕业于清华大学的博士、硕士组成，自主研发了技术领先并具有自主知识产权的BIM-STAR平台。筑星科技作为BIM行业的开拓者和领先者，在轨道交通、桥梁、机场、城市综合体等多个领域，深入探索了BIM技术在工程施工与运维阶段的应用，其中包括广州地铁、国家体育馆鸟巢等项目。',
                ImgUrl: 'assets/img/honor.jpg',
            },
            honorInfo: {
                Title: '荣誉资质',
                Abstract: '  深圳筑星科技有限公司以工程领域信息化为驱动，以智慧城市为目标，公司专注于工程领域施工与运维阶段的BIM服务，致力于建设领域 BIM及信息技术的产品与服务，具有深厚的行业背景和丰富的从业经验。公司核心团队由毕业于清华大学的博士、硕士组成，自主研发了技术领先并具有自主知识产权的BIM-STAR平台。筑星科技作为BIM行业的开拓者和领先者，在轨道交通、桥梁、机场、城市综合体等多个领域，深入探索了BIM技术在工程施工与运维阶段的应用，其中包括广州地铁、国家体育馆鸟巢等项目。',
                ImgUrls: [{
                    ImgUrl: 'assets/img/honor.jpg'
                }, {
                    ImgUrl: 'assets/img/honor.jpg'
                }, {
                    ImgUrl: 'assets/img/honor.jpg'
                }, {
                    ImgUrl: 'assets/img/honor.jpg'
                }]
            },
            teamInfo: {
                Title: '筑星人才',
                Abstract: '一群牛逼的大神',
                Teams: [{
                    Name: 'SB GHH STAR',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    ImgUrl: 'assets/img/team/member1.jpg',
                    DateTime: '2017.03.03',
                    Type: 'CEO'
                }, {
                    Name: '郭花花',
                    Abstract: '任何人都是从一个傻逼成为........大傻逼',
                    ImgUrl: 'assets/img/team/member2.jpg',
                    DateTime: '2017.03.03',
                    Type: 'SBO'
                }, {
                    Name: 'SB GHH STAR',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。知道办这个事应该用多长时间了政府公开办事程序，也拉近了',
                    ImgUrl: 'assets/img/team/member3.jpg',
                    DateTime: '2017.03.03',
                    Type: 'CEO'
                }]
            },
            addressInfo: {
                Title: '联系我们',
                Abstract: '  深圳筑星科技有限公司以工程领域信息化为驱动，以智慧城市为目标。',
                Feedback: {
                    Name: '1',
                    Email: '2',
                    Message: '2'
                }
            },
            methods: {
                feedback: function () {
                    alert(app.addressInfo.Feedback.Name + "-" + app.addressInfo.Feedback.Email + "-" + app.addressInfo.Feedback.Message);
                }
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});