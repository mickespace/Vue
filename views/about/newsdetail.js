require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "lazyload": "jquery/lazyload",
        "bstarData": "../views/about/newsdetailData",
        "layoutData": "../views/common/layoutData",
        "config": "config",
        "bootsnav": "bootstrap/bootsnav",
    },
    shim: {
        'vue': {
            export: 'vue'
        },
        'bootstrap': {
            deps: ['jquery'],
        },
        'bootsnav': {
            export: 'bootsnav'
        },
        'lazyload': {
            deps: ['jquery'],
            export: 'lazyload'
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'lazyload', 'bstarData', 'layoutData', 'config', 'bootsnav'], function (vue, jquery, bootstrap, lazyload, bstarData, layoutData, config, bootsnav) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            NewsInfo: bstarData.NewsData,
            LoginInfo: layoutData.LoginData,
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
                        app.isbusy = false;
                    },
                    error: function () {
                        app.isbusy = false;
                    }
                });
            },
            SwitchMode: function () {
                app.LoginInfo.IsLoginMode = !app.LoginInfo.IsLoginMode;
            },

            Login: function () {
                //判断是否输入正确
                var tip = "请输入用户名密码";
                var account = app.LoginInfo.LoginModel.Account;
                var password = app.LoginInfo.LoginModel.Password;
                if (account == "" || password == "" || isNaN(account) || isNaN(password)) {
                    tip = '账号和密码不能为空'
                    return;
                } else
                    tip = '请点击登录按钮'
                app.LoginInfo.LoginModel.ErrorTip = tip;
                app.isbusy = true;
                //登录操作
                $.ajax({
                    type: 'get',
                    timeout: 5000,
                    url: config.BaseUrl + '/api/v1/user/login',
                    data: {
                        appKey: config.Appkey,
                        userName: account,
                        password: password
                    },
                    dataType: 'json',
                    success: function (res) {
                        app.isbusy = false;
                        var result = res.Data;
                        //处理登录信息(保存到浏览器中)
                        var storage = window.localStorage;
                        storage["currentUser"] = result;
                        app.LoginInfo.LoginModel.ErrorTip = '登录成功';
                    },
                    error: function () {
                        app.isbusy = false;
                        app.LoginInfo.LoginModel.ErrorTip = '登录失败';
                    }
                });
            },
            NavigationTo: function (routerUrl, data, height) {
                var iframeurl = "../" + routerUrl + ".html?data=" + data;
                window.location.href = iframeurl;
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});