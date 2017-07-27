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
                SendCodeTip: '发送验证码',
                SendCode: '发送验证码',
                Message: '完成手机验证创建用户',
                ErrorTip: '',
                NormalTip: '完成手机验证创建用户',
                Title: '创建用户',
                LoginTip: '返回登录界面',
                SubmitTip: '创建用户',
                SendTime: 60,
                Interval: ""
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
        NaviData: {
            NaviList: [{
                Id: 'Index',
                Title: "&nbsp;&nbsp;首页&nbsp;&nbsp;",
                Link: 'index/index',
                ItemList: [{

                }],
                IsActive: false,
                HasItem: false
            },
            {
                Id: 'Product',
                Title: "&nbsp;&nbsp;开放平台&nbsp;&nbsp;",
                Link: 'product/product',
                ItemList: [{
                    Title: "平台介绍",
                    Link: 'product/product',
                    IsActive: false
                }, {
                    Title: "应用商店",
                    Link: 'product/store',
                    IsActive: false
                }, {
                    Title: "二次开发",
                    Link: 'product/developer',
                    IsActive: false
                }, {
                    Title: "产品下载",
                    Link: 'product/download',
                    IsActive: false
                }],
                IsActive: false,
                HasItem: true
            },
            {
                Id: 'Service',
                Title: "&nbsp;&nbsp;解决方案&nbsp;&nbsp;",
                Link: 'service/service',
                ItemList: [{
                    Title: "服务介绍",
                    Link: 'service/service',
                    IsActive: false
                }, {
                    Title: "项目案例",
                    Link: 'service/example',
                    IsActive: false
                }],
                IsActive: false,
                HasItem: true
            },
            {
                Id: 'About',
                Title: "&nbsp;&nbsp;关于筑星&nbsp;&nbsp;",
                Link: 'about/company',
                ItemList: [{
                    Title: "筑星简介",
                    Link: 'about/company',
                    IsActive: false
                }, {
                    Title: "新闻动态",
                    Link: 'about/news',
                    IsActive: false
                }, {
                    Title: "联系我们",
                    Link: 'about/contact',
                    IsActive: false
                }, {
                    Title: "加入我们",
                    Link: 'about/join',
                    IsActive: false
                }],
                IsActive: false,
                HasItem: true
            }
            ],
            SearchTip: "请输入...",
            LoginTip: '&nbsp;试&nbsp;&nbsp;&nbsp;&nbsp;用&nbsp;'
        },
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
                },]
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
                },]
            },
            QrCode: {
                Title: '关注我们',
                Abstract: '微信公众号：筑星BIM<br/>官方QQ技术交流群：629918404',
                WeChatImgUrl: '../../assets/img/weixin_qrcode.png',
                QQImgUrl: '../../assets/img/qq_qrcode.png'
            },
            ToolbarList: [{
                Title: 'QQ咨询',
                Logo: 'fa fa-qq fa-2x',
                Link: 'tencent://message/?uin=3323152338&Site=&Menu=yes',
            }, {
                Title: '立即下载',
                Logo: 'fa fa-cloud-download fa-2x',
                Link: '../product/download.html',
            }, {
                Title: '回到顶部',
                Logo: 'fa fa-arrow-up fa-2x',
                Link: '#app',
            },],


            CompanyTip: 'Copyright ©2016 深圳筑星科技有限公司 All Rights Reserved 粤ICP备15080540号'
        }
    }
});