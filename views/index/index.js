require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
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

require(['vue', 'jquery', 'bootstrap', 'modernizr', 'lazyload', 'bstarData', 'bstarData_en', 'layoutData', 'config', 'bootsnav'], function (vue, jquery, bootstrap, modernizr, lazyload, bstarData, bstarData_en, layoutData, config, bootsnav) {
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
            FooterInfo: layoutData.FooterData,
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
                        app.LoginInfo.UserInfo.Id = userInfo._Id;
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
                        app.LoginInfo.LoginModel.NormalTip = "";
                        app.LoginInfo.LoginModel.ErrorTip = '出现网络异常！';
                    }
                });
            },
            Logout: function () {
                app.LoginInfo.IsSignUp = false;
                app.LoginInfo.Logout();
            },
            SendCode: function () {
                //判断是否输入正确
                app.LoginInfo.RegisterModel.NormalTip = app.LoginInfo.RegisterModel.Message;
                app.LoginInfo.RegisterModel.ErrorTip = '';
                var phone = app.LoginInfo.RegisterModel.Phone;
                if (phone == "") {
                    app.LoginInfo.RegisterModel.NormalTip = "";
                    app.LoginInfo.RegisterModel.ErrorTip = '手机号码不能为空！'
                    return;
                }
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if (!myreg.test(phone)) {
                    app.LoginInfo.RegisterModel.NormalTip = "";
                    app.LoginInfo.RegisterModel.ErrorTip = '请输入有效的手机号码！'
                    return;
                }
                //判断是否已经读取过
                var storage = window.localStorage;
                var date = new Date();
                var currentTime = date.getTime();
                var historyTime = storage.getItem("CodeTime");
                if (historyTime != null || historyTime != "") {
                    return null;
                }
                //请求验证码
                app.isbusy = true;
                // $.ajax({
                //     type: 'get',
                //     timeout: 5000,
                //     url: config.Api.VerifyCodeUrl,
                //     data: {
                //         appKey: config.Appkey,
                //         userName: phone,
                //     },
                //     dataType: 'json',
                //     success: function (res) {

                //     },
                //     error: function (res) {
                //         app.isbusy = false;
                //         app.LoginInfo.RegisterModel.NormalTip = "";
                //         app.LoginInfo.RegisterModel.ErrorTip = '出现网络异常！';
                //     }
                // });
            },
            NavigationTo: function (routerUrl, data, height) {
                var iframeurl = "../" + routerUrl + ".html?data=" + data;
                window.location.href = iframeurl;
            }
        }
    });

    $(function () {
        $("#send_code").click(function () {
            $(this).button('loading').delay(1000).queue(function () {
                app.SendCode();
                $(this).button('complete');
            });

        });
    });
    $("img.lazy").lazyload({
        effect: "fadeIn"
    })

    $(function () {
        app.InitData();
    });
});