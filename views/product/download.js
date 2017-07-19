require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "bstarData": "../views/product/downloadData",
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

require(['vue', 'jquery', 'bootstrap', 'bstarData'], function (vue, jquery, bootstrap, bstarData) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            DownloadInfo: bstarData.DownloadData,
        }
    });
});