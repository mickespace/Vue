require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "lazyload": "jquery/lazyload",
        "bstarData": "../views/about/contactData",
    },
    shim: {
        'vue': {
            export: 'vue'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'lazyload': {
            deps: ['jquery']
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'lazyload', 'bstarData'], function (vue, jquery, bootstrap, lazyload, bstarData) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            AddressInfo: bstarData.AddressData,
        },
        methods: {
            feedback: function () {
                alert(app.addressInfo.Feedback.Name + "-" + app.addressInfo.Feedback.Email + "-" + app.addressInfo.Feedback.Message);
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});