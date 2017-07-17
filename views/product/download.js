require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
    },
    shim: {
        'vue': {
            export: 'vue'
        },
        'bootstrap': {
            deps: ['jquery'],
            export: 'bootstrap'
        }
    }
});

require(['vue', 'jquery', 'bootstrap'], function (vue, jquery, bootstrap) {
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

                }
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});