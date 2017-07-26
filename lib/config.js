define(function () {
    var BaseUrl = 'http://app.bstar5.com:19432';
    var DataUrl = '';
    var StoreUrl = '';
    var DeveloperUrl = '';
    return {
        Appkey: '908F0991-0E14-484F-91E7-DAAF0F4B2A37',
        Api: {
            LoginUrl: BaseUrl + '/api/v1/user/login',
            RegisterUrl: BaseUrl + '/api/v1/user/register',
            UserExistUrl: BaseUrl + '/api/v1/user/exist',
            VerifyCodeUrl: BaseUrl + '/api/v1/user/register/verify_code',
            InviteCodeUrl: BaseUrl + '/api/v1/project/valid_invite_code',
        },
        PostUrl: function (url, data) {
            var paramUrl = "";
            for (var key in data) {
                paramUrl = paramUrl + key + "=" + data[key] + "&";
            }
            var httpUrl = url + "?" + paramUrl;
            return httpUrl;
        }
    };
});