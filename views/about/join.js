require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "lazyload": "jquery/lazyload",
        "bstarData": "../views/about/joinData",
        "layoutData": "../views/common/layoutData",
        "config": "config",
        "bootsnav": "bootstrap/bootsnav",
    },
    shim: {
        'bootstrap': {
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

require(['vue', 'jquery', 'bootstrap', 'lazyload', 'bstarData', 'layoutData', 'config', 'bootsnav'], function (vue, jquery, bootstrap, lazyload, bstarData, layoutData, config, bootsnav) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            NoticeInfo: bstarData.NoticeData,
            JoinInfo: bstarData.JoinData,
            SearchInfo: bstarData.SearchData,
            WelfareInfo: bstarData.WelfareData,
            JobInfo: bstarData.JobData,
            ResumeInfo: bstarData.ResumeData,
            LoginInfo: layoutData.LoginData,
            NaviInfo: layoutData.NaviData,
            FooterInfo: layoutData.FooterData,
        },
        methods: {

            handleJobShow: function (jobId) {
                for (var i = 0; i < app.JobInfo.JobList.length; i++) {
                    if (app.JobInfo.JobList[i].Id == jobId) {
                        app.JobInfo.JobList[i].IsShow = !app.JobInfo.JobList[i].IsShow;
                    } else {
                        app.JobInfo.JobList[i].IsShow = false;
                    }
                }
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
            InitNavi: function (id) {
                for (var item in app.NaviInfo.NaviList) {
                    var obj = app.NaviInfo.NaviList[item]
                    if (obj.Id == id) {
                        obj.IsActive = true;
                    }
                }
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
                        app.LoginInfo.UserInfo.Id = userInfo._id;
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
            VerifyPhone: function () {
                app.LoginInfo.RegisterModel.NormalTip = app.LoginInfo.RegisterModel.Message;
                app.LoginInfo.RegisterModel.ErrorTip = '';
                var phone = app.LoginInfo.RegisterModel.Phone;
                if (phone == "") {
                    app.LoginInfo.RegisterModel.NormalTip = "";
                    app.LoginInfo.RegisterModel.ErrorTip = '手机号码不能为空！'
                    return false;
                }
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if (!myreg.test(phone)) {
                    app.LoginInfo.RegisterModel.NormalTip = "";
                    app.LoginInfo.RegisterModel.ErrorTip = '请输入有效的手机号码！'
                    return false;
                }
                return true;
            },
            Register: function () {
                //判断是否输入正确
                var isPass = app.VerifyPhone();
                if (!isPass) {
                    return;
                }
                var phone = app.LoginInfo.RegisterModel.Phone;
                var password = app.LoginInfo.RegisterModel.Password;
                var rePassword = app.LoginInfo.RegisterModel.RePassword;
                var code = app.LoginInfo.RegisterModel.Code;
                if (code == "") {
                    app.LoginInfo.RegisterModel.NormalTip = "";
                    app.LoginInfo.RegisterModel.ErrorTip = '请输入验证码！'
                    return;
                }
                if (password == "" || rePassword == "") {
                    app.LoginInfo.RegisterModel.NormalTip = "";
                    app.LoginInfo.RegisterModel.ErrorTip = '密码不能为空！'
                    return;
                }
                if (password.length < 6 || rePassword.length < 6) {
                    app.LoginInfo.RegisterModel.NormalTip = "";
                    app.LoginInfo.RegisterModel.ErrorTip = '密码长度至少要6位以上！'
                    return;
                }
                if (password != rePassword) {
                    app.LoginInfo.RegisterModel.NormalTip = "";
                    app.LoginInfo.RegisterModel.ErrorTip = '两次输入的密码不一致！'
                    return;
                }
                app.isbusy = true;
                var urldata = {
                    AppKey: config.Appkey,
                    Password: password,
                    VerifyCode: code,
                    PhoneNumber: phone,
                    RealName: phone
                }
                var url = config.PostUrl(config.Api.RegisterUrl, urldata);
                $.ajax({
                    type: 'post',
                    timeout: 10000,
                    url: url,
                    data: urldata,
                    dataType: 'json',
                    success: function (res) {
                        if (!res.IsOk) {
                            app.isbusy = false;
                            app.LoginInfo.RegisterModel.NormalTip = "";
                            app.LoginInfo.RegisterModel.ErrorTip = res.Message;
                            return;
                        }
                        //清楚注册信息
                        app.LoginInfo.RegisterModel.Phone = "";
                        app.LoginInfo.RegisterModel.Password = "";
                        app.LoginInfo.RegisterModel.RePassword = "";
                        app.LoginInfo.RegisterModel.Code = "";
                        app.LoginInfo.IsLoginMode = true; //进入登录状态
                        app.LoginInfo.LoginModel.Account = phone;
                        app.LoginInfo.LoginModel.Password = password;
                        app.Login();
                    },
                    error: function (res) {
                        app.isbusy = false;
                        app.LoginInfo.RegisterModel.NormalTip = "";
                        app.LoginInfo.RegisterModel.ErrorTip = '出现网络异常！';
                        $("#send_code").attr("disabled", false);
                        window.clearInterval(app.LoginInfo.RegisterModel.Interval)
                        app.LoginInfo.RegisterModel.SendTime = 60;
                        return;
                    }
                });

            },
            SendCode: function () {
                var isPass = app.VerifyPhone();
                if (!isPass) {
                    return;
                }
                var phone = app.LoginInfo.RegisterModel.Phone;
                var password = app.LoginInfo.RegisterModel.Password;
                var rePassword = app.LoginInfo.RegisterModel.RePassword;
                var code = app.LoginInfo.RegisterModel.Code;
                //判断是否已存在
                app.isbusy = true;
                $.ajax({
                    type: 'get',
                    timeout: 10000,
                    url: config.Api.UserExistUrl,
                    data: {
                        AppKey: config.Appkey,
                        UserName: phone,
                    },
                    dataType: 'json',
                    success: function (res) {
                        app.isbusy = false;
                        if (!res.IsOk) {
                            app.LoginInfo.RegisterModel.NormalTip = "";
                            app.LoginInfo.RegisterModel.ErrorTip = res.Message;
                            return;
                        }
                        if (res.Data == true) {
                            app.LoginInfo.RegisterModel.NormalTip = "";
                            app.LoginInfo.RegisterModel.ErrorTip = "该用户已存在！";
                            return;
                        }
                        //判断是否已经读取过
                        var storage = window.localStorage;
                        var jsonTime = storage.getItem("codeTime");
                        if (jsonTime != null && jsonTime != "") {
                            //判断时间是否小于当前时间60秒
                            var date = new Date();
                            var currentTime = date.getTime();
                            var afterTime = parseInt(jsonTime);
                            var intervalTime = parseInt((currentTime - afterTime) / 1000);
                            if (intervalTime < 60) {
                                app.LoginInfo.RegisterModel.NormalTip = "";
                                app.LoginInfo.RegisterModel.ErrorTip = (app.LoginInfo.RegisterModel.SendTime - intervalTime) + ' 秒后重新获取验证码'
                                return null;
                            }
                        }
                        //存入数据
                        storage["codeTime"] = new Date().getTime();
                        //提示发送验证号码
                        $("#send_code").attr("disabled", true);
                        app.LoginInfo.RegisterModel.Interval = window.setInterval(app.SetTime, 1000);
                        var urldata = {
                            AppKey: config.Appkey,
                            UserName: phone,
                        }
                        var url = config.PostUrl(config.Api.VerifyCodeUrl, urldata);
                        $.ajax({
                            type: 'post',
                            timeout: 10000,
                            url: url,
                            data: urldata,
                            dataType: 'json',
                            success: function (res) {
                                if (!res.IsOk) {
                                    app.LoginInfo.RegisterModel.NormalTip = "";
                                    app.LoginInfo.RegisterModel.ErrorTip = res.Message;
                                    $("#send_code").attr("disabled", false);
                                    window.clearInterval(app.LoginInfo.RegisterModel.Interval)
                                    app.LoginInfo.RegisterModel.SendTime = 60;
                                    return;
                                }
                            },
                            error: function (res) {
                                app.LoginInfo.RegisterModel.NormalTip = "";
                                app.LoginInfo.RegisterModel.ErrorTip = '出现网络异常！';
                                $("#send_code").attr("disabled", false);
                                window.clearInterval(app.LoginInfo.RegisterModel.Interval)
                                app.LoginInfo.RegisterModel.SendTime = 60;
                                return;
                            }
                        });
                    },
                    error: function (res) {
                        app.isbusy = false;
                        app.LoginInfo.RegisterModel.NormalTip = "";
                        app.LoginInfo.RegisterModel.ErrorTip = '出现网络异常！';
                        return;
                    }
                });

            },
            NavigationTo: function (routerUrl, data, height) {
                var urlParam = "";
                if (data != "")
                    urlParam = "?data=" + data;
                var iframeurl = "../" + routerUrl + ".html";
                window.location.href = iframeurl;
            },
            SetTime: function () {
                app.LoginInfo.RegisterModel.SendCode = "重新发送" + (app.LoginInfo.RegisterModel.SendTime) + "s";
                if (app.LoginInfo.RegisterModel.SendTime < 1) {
                    app.LoginInfo.RegisterModel.SendCode = app.LoginInfo.RegisterModel.SendCodeTip;
                    $("#send_code").attr("disabled", false);
                    window.clearInterval(app.LoginInfo.RegisterModel.Interval)
                    app.LoginInfo.RegisterModel.SendTime = 60;
                    return;
                }
                app.LoginInfo.RegisterModel.SendTime = app.LoginInfo.RegisterModel.SendTime - 1;
            }
        }
    });
    $(function () {
        app.InitData();
        app.InitNavi('About');
    });
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });
});