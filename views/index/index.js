require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "carousel": "carousel/carousel",
        "modernizr": "parallax/modernizr",
        "lazyload": "jquery/lazyload",
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
        },
        'carousel': {
            deps: ['jquery'],
        },
        'lazyload': {
            deps: ['jquery'],
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'carousel', 'modernizr', 'lazyload'], function (vue, jquery, bootstrap, carousel, modernizr, lazyload) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            parallaxInfo: {
                Title: '',
                Parallaxs: [{
                    Title: '震撼发布',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    BgImgUrl: 'assets/img/index/parallax/1.png',
                    ImgUrl: 'assets/img/index/parallax/side_1.png',
                    IsFirst: true

                }, {
                    Title: 'BIM平台',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    BgImgUrl: 'assets/img/index/parallax/2.png',
                    ImgUrl: 'assets/img/index/parallax/side_2.png',
                    IsFirst: false

                }, {
                    Title: '二次开发',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    BgImgUrl: 'assets/img/index/parallax/3.png',
                    ImgUrl: 'assets/img/index/parallax/side_3.png',
                    IsFirst: false
                }]
            },
            serviceInfo: {
                Title: '开放平台',
                Abstract: ' ',
                Services: [{
                    Name: '模板数据',
                    ImgUrl: 'assets/img/index/platform/platform_icon.png',
                    Abstract: '想内容啊手动阀ok',
                }, {
                    Name: '模板数据',
                    ImgUrl: 'assets/img/index/platform/platform_icon2.png',
                    Abstract: '任何单位任何事情，',
                }, {
                    Name: '模板数据',
                    ImgUrl: 'assets/img/index/platform/platform_icon3.png',
                    Abstract: '任何单位任何事情，',
                }],

            },
            quotationInfo: {
                UserName: '--陈祥祥 技术总监--',
                Quotation: '"更开放的姿态拥抱BIM"'
            }
        },
        methods: {
            showmessage: function () {
                app.isbusy = true;
                jquery.ajax({
                    type: 'get',
                    timeout: 5000,
                    url: 'http://192.16.10.100:19432/api/v1/user/login',
                    data: {
                        appKey: '908F0991-0E14-484F-91E7-DAAF0F4B2A37',
                        userName: '13642520884',
                        password: '123456'
                    },
                    dataType: 'json',
                    success: function (res) {
                        app.isbusy = false;
                    },
                    error: function () {
                        app.isbusy = false;
                    }
                });
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});