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

require(['vue', 'jquery', 'bootstrap', 'bootsnav', 'toolbar', 'fullpage','lazyload'], function (vue, jquery, bootstrap, bootsnav, toolbar, fullpage,lazyload) {
    //data
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            products: [{
                Name: 'STARTUP FEATURE',
                Abstract: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo orta felis euismod semper'
            }, {
                Name: 'STARTUP FEATURE',
                Abstract: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo orta felis euismod semper'
            }]
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
    });
    //lazyload
      $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});