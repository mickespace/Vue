require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "carousel": "carousel/carousel",
        "modernizr": "parallax/modernizr",
        "lazyload": "jquery/lazyload",
        "bstarData": "../views/index/indexData",
        "bstarData_en": "../views/index/indexData_en",
        "layoutData": "../views/common/layoutData",
        "config": "config",
        "bootsnav": "bootstrap/bootsnav",
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
        },
        'carousel': {
            deps: ['jquery'],
        },
        'bootsnav': {
            export: 'bootsnav'
        },
        'lazyload': {
            deps: ['jquery'],
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'carousel', 'modernizr', 'lazyload', 'bstarData', 'bstarData_en', 'layoutData', 'config', 'bootsnav'], function (vue, jquery, bootstrap, carousel, modernizr, lazyload, bstarData, bstarData_en, layoutData, config, bootsnav) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            ExampleInfo: bstarData.ExampleData,
            ParallaxInfo: bstarData.ParallaxData,
            PlatformInfo: bstarData.PlatformData,
            StoreInfo: bstarData.StoreData,
            TeamInfo: bstarData.TeamData,
            TrialInfo: bstarData.TrialData,
            LoginInfo: layoutData.LoginData,
        },
        methods: {
            onload: function () {
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
                        app.ExampleInfo = bstarData_en.ExampleData;
                        app.ParallaxInfo = bstarData_en.ParallaxData;
                        app.PlatformInfo = bstarData_en.PlatformData;
                        app.StoreInfo = bstarData_en.StoreData;
                        app.TeamInfo = bstarData_en.TeamData;
                        app.TrialInfo = bstarData_en.TrialData;
                        app.LoginInfo = layoutData.LoginData;
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
                        var result = JSON.stringify(res.Data);
                        alert(result);
                        //处理登录信息(保存到浏览器中)
                        var storage = window.localStorage;
                        storage["currentUser"] = result;
                        app.LoginInfo.LoginModel.ErrorTip = '登录成功';
                        $("nav.navbar.bootsnav > .side").removeClass("on");
                        $("body").removeClass("on-side");
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

    $(function () {
        var storage = window.localStorage;
        var userInfo = storage.getItem("currentUser");
        var user = JSON.stringify(userInfo);
        alert(user);
    });
});