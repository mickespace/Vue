require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "bootsnav": "bootstrap/bootsnav",
        "toolbar": "toolbar/toolbar",
        "iframe": "iframe/iframe",
        "config": "config",
        "layoutData": "../views/common/LayoutData",
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

require(['vue', 'jquery', 'bootstrap', 'bootsnav', 'iframe', 'config', 'layoutData'], function (v, $, bootstrap, bootsnav, iframe, config, layoutData) {

    var layout = new v({
        el: '#layout',
        data: {
            isbusy: false,
            LoginInfo: layoutData.LoginData
        },
        methods: {
            SwitchMode: function () {
                layout.LoginInfo.IsLoginMode = !layout.LoginInfo.IsLoginMode;
            },


            Login: function () {
                //判断是否输入正确
                var tip = "请输入用户名密码";
                var account = layout.LoginInfo.LoginModel.Account;
                var password = layout.LoginInfo.LoginModel.Password;
                if (account == "" || password == "" || isNaN(account) || isNaN(password)) {
                    tip = '账号和密码不能为空'
                    return;
                } else
                    tip = '请点击登录按钮'
                layout.LoginInfo.LoginModel.ErrorTip = tip;
                layout.isbusy = true;
                //登录操作
                $.ajax({
                    type: 'get',
                    timeout: 5000,
                    url: config.Api.LoginUrl,
                    data: {
                        appKey: config.Appkey,
                        userName: account,
                        password: password
                    },
                    dataType: 'json',
                    success: function (res) {
                        layout.isbusy = false;
                        var result = JSON.stringify(res.Data);
                        alert(result);
                        //处理登录信息(保存到浏览器中)
                        var storage = window.localStorage;
                        storage["currentUser"] = result;
                        layout.LoginInfo.LoginModel.ErrorTip = '登录成功';
                        $("nav.navbar.bootsnav > .side").removeClass("on");
                        $("body").removeClass("on-side");
                    },
                    error: function () {
                        layout.isbusy = false;
                        layout.LoginInfo.LoginModel.ErrorTip = '登录失败';
                    }
                });
            },
            NavigationTo: function (routerUrl, data, height) {
                var iframeurl = "../" + routerUrl + ".html?data=" + data;
                window.location.href = iframeurl;
            }
        }
    });
    // $(function () {
    //     var bsiframe = $("#mainFrame");
    //     bsiframe.attr("height", '3200px');
    //     bsiframe.attr("src", '../index/index.html');
    // })
    $(function () {
        $("#send_code").click(function () {
            $(this).button('loading').delay(1000).queue(function () {
                $(this).button('complete');
            });
        });
    });
    $(function () {
        var storage = window.localStorage;
        var userInfo = storage.getItem("currentUser");
        alert(userInfo);
    });

});