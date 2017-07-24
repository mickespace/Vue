define(function () {
    return {
        LoginData: {
            IsLoginMode: true,
            IsSignUp: false,
            LoginModel: {
                Account: '',
                Password: '',
                NormalTip: '请输入用户名密码',
                Message: '请输入用户名密码',
                ErrorTip: '',
            },
            RegisterModel: {
                Phone: '',
                Code: '',
                Password: '',
                RePassword: '',
            },
            UserInfo: {
                Avatar: '',
                RealName: '',
                PhoneNumber: '',
                Email: '',
                TokenKey: '',
                Id: '',
                LoginDate: '',
            },
            InitData: function () {
                try {
                    var storage = window.localStorage;
                    var jsonData = storage.getItem("currentUser");
                    if (jsonData == null || jsonData == "") {
                        return null;
                    }
                    //读取数据
                    var user = JSON.parse(jsonData);
                    return user;
                } catch (ex) {
                    return null;
                }

            },
            Logout: function () {
                var storage = window.localStorage;
                storage.clear();
            }
        },
        NaviData: {}
    }
});