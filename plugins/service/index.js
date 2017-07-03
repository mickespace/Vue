require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "lazyload": "jquery/lazyload",
        "bootstrap": "bootstrap/bootstrap",
        "bootsnav": "bootstrap/bootsnav",

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
            deps: ['jquery', 'bootstrap'],
            export: 'bootsnav'
        },


        'lazyload': {
            deps: ['jquery'],
            export: 'lazyload'
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'bootsnav', 'lazyload'], function (vue, jquery, bootstrap, bootsnav, lazyload) {
    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
    var app = new vue({
        el: '#app',
        data: {
            message: 'Hello Vue!',
            isshow: true,
            messageData: [{
                name: 'fuck',
                detail: 'fuck you'
            }, {
                name: 'fuck',
                detail: 'fuck you'
            }, {
                name: 'fuck',
                detail: 'fuck you'
            }]
        },
        methods: {
            showmessage: function () {
                jquery.ajax({
                    type: 'get',
                    url: 'http://192.168.10.100:19432/api/v1/user/login',
                    data: {
                        appKey: '908F0991-0E14-484F-91E7-DAAF0F4B2A37',
                        userName: '13642520884',
                        password: '123456'
                    },
                    dataType: 'json',
                    success: function (res) {
                        app.message = res.Data.Email;
                        app.isshow = false;
                    },
                    error: function () {
                        alert("异常");
                    }
                });
            }
        }
    });
});