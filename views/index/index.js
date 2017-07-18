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

require(['vue', 'jquery', 'bootstrap', 'carousel', 'modernizr', 'lazyload', '../views/index/indexData'], function (vue, jquery, bootstrap, carousel, modernizr, lazyload, indexData) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            ParallaxInfo: indexData.ParallaxData,
            PlatformInfo: indexData.PlatformData,
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