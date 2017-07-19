require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "carousel": "carousel/carousel",
        "modernizr": "parallax/modernizr",
        "lazyload": "jquery/lazyload",
        "bstarData": "../views/index/indexData",
        "bstarData_en": "../views/index/indexData_en"
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

require(['vue', 'jquery', 'bootstrap', 'carousel', 'modernizr', 'lazyload', 'bstarData', 'bstarData_en'], function (vue, jquery, bootstrap, carousel, modernizr, lazyload, bstarData, bstarData_en) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            ExampleInfo: bstarData.ExampleData,
            ParallaxInfo: bstarData.ParallaxData,
            PlatformInfo: bstarData.PlatformData,
            StoreInfo: bstarData.StoreData,
            TeamInfo: bstarData.TeamData,
            TrialInfo: bstarData.TrialData
        },
        methods: {
            onload: function () {
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
                        app.ExampleInfo = bstarData_en.ExampleData;
                        app.ParallaxInfo = bstarData_en.ParallaxData;
                        app.PlatformInfo = bstarData_en.PlatformData;
                        app.StoreInfo = bstarData_en.StoreData;
                        app.TeamInfo = bstarData_en.TeamData;
                        app.TrialInfo = bstarData_en.TrialData;
                    }
                });
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })

    window.onload = app.onload();
});