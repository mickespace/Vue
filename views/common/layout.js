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

    var layout = new v({
        el: '#layout',
        data: {
            isbusy: false,
            operModel: {
                isLoginMode: true,
            },
            userInfo: {
                Name: '陈俊良',
                LoginTime: '2017-07-11',
                Portrait: '2017-07-11',
                IsLogin: false
            },
            loginModel: {
                Account: '',
                Password: ''
            },
            registerModel: {
                Phone: '',

            }
        },
        methods: {
            SwitchMode: function () {
                layout.operModel.isLoginMode = !layout.operModel.isLoginMode;
            },

            Login: function () {
                //判断是否输入正确

            },
            Logout: function () {

            },
            Register: function () {

            },

            NavigationTo: function (routerUrl, data, height) {
                var iframeurl = "../" + routerUrl + ".html?data=" + data;
                var bsiframe = $("#mainFrame");
                bsiframe.attr("height", height + 'px');
                bsiframe.attr("src", iframeurl);
            }
        }
    });
    $(function () {
        var bsiframe = $("#mainFrame");
        bsiframe.attr("height", '3200px');
        bsiframe.attr("src", '../index/index.html');
    })
    $(function () {
        $("#send_code").click(function () {
            $(this).button('loading').delay(1000).queue(function () {
                $(this).button('complete');
            });
        });
    });


});