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
        "fullpage": "fullpage/fullpage",
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
        'fullpage': {
            deps: ['jquery'],
            export: 'fullpage'
        },
        'lazyload': {
            deps: ['jquery'],
            export: 'lazyload'
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'bootsnav', 'toolbar', 'fullpage', 'lazyload'], function (vue, jquery, bootstrap, bootsnav, toolbar, fullpage, lazyload) {
    //data
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            productInfo: {
                Title: '产品中心',
                Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                ImgUrl: 'assets/img/project_bg.jpg',
                Content: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                Products: [{
                    Name: '筑星科技',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多'
                }, {
                    Name: '筑星科技',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多'
                }, {
                    Name: '筑星科技',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多'
                }, {
                    Name: '筑星科技',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多'
                }]
            },
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
                        app.message = res.Data.Email;
                        app.isshow = false;
                        app.isbusy = false;
                    },
                    error: function () {
                        app.isbusy = false;
                    }
                });
            }
        }
    });
    //fullpage
    jquery(function () {
        $('#dowebok').fullpage({
            navigation: true
        });

        $(window).resize(function () {
            autoScrolling();
        });

        function autoScrolling() {
            var $ww = $(window).width();
            if ($ww < 1024) {
                $.fn.fullpage.setAutoScrolling(false);
            } else {
                $.fn.fullpage.setAutoScrolling(true);
            }
        }

        autoScrolling();

        setInterval(function () {
            $.fn.fullpage.moveSlideRight();
        }, 5000);

    });
    //lazyload
    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});