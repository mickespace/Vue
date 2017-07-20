require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "lazyload": "jquery/lazyload",
        "bstarData": "../views/about/newsData",
    },
    shim: {
        'vue': {
            export: 'vue'
        },
        'bootstrap': {
            deps: ['jquery'],
        },
        'lazyload': {
            deps: ['jquery'],
            export: 'lazyload'
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'bstarData', 'lazyload'], function (vue, jquery, bootstrap, bstarData, lazyload) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            NoticeInfo: bstarData.NoticeData,
            NewsInfo: bstarData.NewsData,
            methods: {
                handleDetail: function (Id) {
                    $(location).attr('href', 'newsdetail.html?newId=' + Id);
                }
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});