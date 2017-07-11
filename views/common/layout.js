require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "bootsnav": "bootstrap/bootsnav",
        "toolbar": "toolbar/toolbar",
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
    }
});

require(['vue', 'jquery', 'bootstrap', 'bootsnav'], function (vue, jquery, bootstrap, bootsnav) {

});