define(function () {
    return {
        LoginData: {
            IsLoginMode: true,
            IsSignUp: false,
            LoginModel: {
                Account: '',
                Password: '',
                AccountTip: '请输入账号',
                PasswordTip: '请输入密码',
                NormalTip: '请输入用户名密码',
                Message: '请输入用户名密码',
                ErrorTip: '',
                Title: '用户登录',
                RegisterTip: '组册新用户',
                SubmitTip: '登   录',
            },
            RegisterModel: {
                Phone: '',
                Code: '',
                Password: '',
                RePassword: '',
                PhoneTip: '请输入账号',
                PasswordTip: '请输入密码',
                RePasswordTip: '请再次输入密码',
                CodeTip: '短信验证码',
                SendCode: '发送验证码',
                Message: '完成手机验证创建用户',
                ErrorTip: '',
                NormalTip: '完成手机验证创建用户',
                Title: '创建用户',
                LoginTip: '返回登录界面',
                SubmitTip: '创建用户'
            },
            UserInfo: {
                Avatar: '',
                RealName: '',
                PhoneNumber: '',
                Email: '',
                TokenKey: '',
                Id: '',
                LoginDate: '',
                LogoutTip: '注销登录',
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
        NaviData: {},
        FooterData: {
            Contact: {
                Title: '联系方式',
                Name: ' 名称 ：深圳筑星科技有限公司',
                Email: ' 邮箱 : szbstar@bstar5.com',
                Fax: '传真 : 0755-86240165',
                Address: '地址 : 深圳市南山区凯达尔集团中心大厦A座1201 ',
                Phone: ' 电话 : 0755-86240165',
            },
            Waiter: {
                Title: '咨询人员',
                UserList: [{
                    Name: '蒋先生',
                    Phone: '电话：13265731349',
                    ImgUrl: '../../assets/img/user1.jpg',
                }, {
                    Name: '伍先生',
                    Phone: '电话：15118168052',
                    ImgUrl: '../../assets/img/user2.jpg',
                }, {
                    Name: '叶先生',
                    Phone: '电话：18122776916',
                    ImgUrl: '../../assets/img/user3.jpg',
                }, ]
            },
            Navi: {
                Title: '导航菜单',
                MenuList: [{
                    Name: '开放平台',
                    Link: 'product/product',
                }, {
                    Name: '解决方案',
                    Link: 'service/service',
                }, {
                    Name: '公司简介',
                    Link: 'about/company',
                }, {
                    Name: '联系我们',
                    Link: 'about/contact',
                }, {
                    Name: '加入我们',
                    Link: 'about/join',
                }, ]
            },
            QrCode: {
                Title: '关注我们',
                Abstract: '微信公众号：筑星BIM<br/>官方QQ技术交流群：629918404',
                WeChatImgUrl: '../../assets/img/weixin_qrcode.png',
                QQImgUrl: '../../assets/img/qq_qrcode.png'
            },

        }
    }
});