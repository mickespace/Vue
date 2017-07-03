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
            message: 'Hello Vue!',
            isbusy: false,
            teams: [{
                Name: 'SB GHH STAR',
                Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit',
                ImgUrl: 'assets/img/team/member1.jpg'
            }, {
                Name: '郭花花',
                Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit',
                ImgUrl: 'assets/img/team/member2.jpg'
            }, {
                Name: 'SB GHH STAR',
                Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit',
                ImgUrl: 'assets/img/team/member3.jpg'
            }, {
                Name: 'SB GHH STAR',
                Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit',
                ImgUrl: 'assets/img/team/member4.jpg'
            }],

            services: [{
                Name: 'STARTUP FEATURE',
                Abstract: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo orta felis euismod semper'
            }, {
                Name: 'STARTUP FEATURE',
                Abstract: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo orta felis euismod semper'
            }, {
                Name: 'STARTUP FEATURE',
                Abstract: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo orta felis euismod semper'
            }, {
                Name: '模板数据',
                Abstract: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo orta felis euismod semper'
            }],

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
                        app.teams = [{
                            Name: 'SB GHH STAR',
                            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit',
                            ImgUrl: 'assets/img/team/member1.jpg'
                        }, {
                            Name: 'SB GHH STAR',
                            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit',
                            ImgUrl: 'assets/img/team/member3.jpg'
                        }, {
                            Name: 'SB GHH STAR',
                            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit',
                            ImgUrl: 'assets/img/team/member4.jpg'
                        }];
                    }
                });
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});