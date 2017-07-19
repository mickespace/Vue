require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "lazyload": "jquery/lazyload",
        "bstarData": "../views/service/exampleData",
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
        },
        'lazyload': {
            deps: ['jquery'],
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'lazyload', 'bstarData'], function (vue, jquery, bootstrap, lazyload, bstarData) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            ExampleInfo: bstarData.ExampleData
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