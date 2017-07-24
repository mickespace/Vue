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
            InitData: function () {
                var user = app.LoginInfo.InitData();
                if (user == null)
                    return;
                app.LoginInfo.UserInfo.Avatar = user.Avatar;
                app.LoginInfo.UserInfo.RealName = user.RealName;
                app.LoginInfo.UserInfo.PhoneNumber = user.PhoneNumber;
                app.LoginInfo.UserInfo.Email = user.Email;
                app.LoginInfo.UserInfo.Id = user.Id;
                app.LoginInfo.UserInfo.TokenKey = user.TokenKey;
                app.LoginInfo.UserInfo.LoginDate = user.LoginDate;
                app.LoginInfo.IsSignUp = true;

            },
            Login: function () {
                //判断是否输入正确

                app.LoginInfo.LoginModel.NormalTip = app.LoginInfo.LoginModel.Message;
                app.LoginInfo.LoginModel.ErrorTip = '';
                var account = app.LoginInfo.LoginModel.Account;
                var password = app.LoginInfo.LoginModel.Password;
                if (account == "" || password == "") {
                    app.LoginInfo.LoginModel.NormalTip = "";
                    app.LoginInfo.LoginModel.ErrorTip = '账号和密码不能为空'
                    return;
                }
                app.isbusy = true;
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
                        app.isbusy = false;
                        if (!res.IsOk) {
                            app.LoginInfo.LoginModel.NormalTip = "";
                            app.LoginInfo.LoginModel.ErrorTip = res.Message;
                            return;
                        }
                        var userInfo = res.Data;
                        //判断是否登陆成功
                        app.LoginInfo.UserInfo.Avatar = userInfo.Avatar;
                        app.LoginInfo.UserInfo.RealName = userInfo.RealName;
                        app.LoginInfo.UserInfo.PhoneNumber = userInfo.PhoneNumber;
                        app.LoginInfo.UserInfo.Email = userInfo.Email;
                        app.LoginInfo.UserInfo.Id = userInfo.Id;
                        app.LoginInfo.UserInfo.TokenKey = userInfo.TokenKey;
                        var date = new Date();
                        app.LoginInfo.UserInfo.LoginDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '  ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                        app.LoginInfo.IsSignUp = true;
                        //保存到浏览器
                        var storage = window.localStorage;
                        storage["currentUser"] = JSON.stringify(app.LoginInfo.UserInfo);
                        //隐藏输入页面
                        $("nav.navbar.bootsnav > .side").removeClass("on");
                        $("body").removeClass("on-side");
                        //清除输入数据
                        app.LoginInfo.LoginModel.Account = "";
                        app.LoginInfo.LoginModel.Password = "";
                    },
                    error: function (res) {
                        app.isbusy = false;
                        var result = JSON.stringify(res.Data);
                        alert(result);
                        app.isbusy = false;
                        app.LoginInfo.LoginModel.NormalTip = "";
                        app.LoginInfo.LoginModel.ErrorTip = '出现网络异常';
                    }
                });
            },
            Logout: function () {
                app.LoginInfo.IsSignUp = false;
                app.LoginInfo.Logout();
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
        app.InitData();
    });
});