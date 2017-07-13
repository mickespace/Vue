require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
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
        'lazyload': {
            deps: ['jquery'],
            export: 'lazyload'
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'lazyload'], function (vue, jquery, lazyload) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            addressInfo: {
                Title: '联系我们',
                Abstract: '  深圳筑星科技有限公司以工程领域信息化为驱动，以智慧城市为目标。',
                Feedback: {
                    Name: '1',
                    Email: '2',
                    Message: '2'
                }
            },
            methods: {
                feedback: function () {
                    alert(app.addressInfo.Feedback.Name + "-" + app.addressInfo.Feedback.Email + "-" + app.addressInfo.Feedback.Message);
                }
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});