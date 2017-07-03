require.config({
    paths: {
        "vue": "../../lib/vue/vue",
        "jquery": "../../lib/jquery/jquery.min",
        "bootstrap": "../../lib/bootstrap/bootstrap",
        "bootsnav": "../../lib/bootstrap/bootsnav",
        "toolbar": "../../lib/toolbar/toolbar",
        "fullpage": "../../lib/fullpage/fullpage"
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
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'bootsnav', 'toolbar', 'fullpage'], function (vue, jquery, bootstrap, bootsnav, toolbar, fullpage) {
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
});