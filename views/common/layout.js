require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "bootsnav": "bootstrap/bootsnav",
        "toolbar": "toolbar/toolbar",
        "iframe": "iframe/iframe",
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
        'iframe': {
            export: 'iframe'
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'bootsnav', 'iframe'], function (v, $) {
    $(function () {
        startInit('mainFrame');
    });
    var layout = new v({
        el: '#layout',
        data: {}
    });
});