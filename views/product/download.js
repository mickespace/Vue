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
            downloadInfo: {
                Title: '',
                ImgUrl: 'assets/img/download/download.png'
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
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});