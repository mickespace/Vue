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
        data: {
            operModel: {
                isLoginMode: true,
                Name: '登录界面'
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
                if (layout.operModel.isLoginMode) {
                    Layout.operModel.Name = "登录界面";
                } else {
                    Layout.operModel.Name = "注册界面";
                }
            },

            Login: function () {
                //判断是否输入正确

            },
            Logout: function () {

            },
            Register: function () {

            }
        }
    });

    $(function () {
        $("#send_code").click(function () {
            $(this).button('loading').delay(1000).queue(function () {
                $(this).button('complete');
            });
        });
    });
});