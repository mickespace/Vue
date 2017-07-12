require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "lazyload": "jquery/lazyload",
        "immersive": "immersive/immersive"
    },
    shim: {
        'vue': {
            export: 'vue'
        },
        'bootstrap': {
            deps: ['jquery'],
            export: 'bootstrap'
        },
        'lazyload': {
            deps: ['jquery'],
            export: 'lazyload'
        },
        'immersive': {
            deps: ['jquery'],
            export: 'immersive'
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'immersive', 'lazyload'], function (vue, jquery, bootstrap, immersive, lazyload) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            parallaxInfo: {
                Title: '',
                Parallaxs: [{
                    Title: '震撼发布',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    BgImgUrl: 'assets/img/parallax_bg.jpg',
                    ImgUrl: 'assets/img/1.png',
                    IsFirst: true

                }, {
                    Title: 'BIM平台',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    BgImgUrl: 'assets/img/parallax_bg.jpg',
                    ImgUrl: 'assets/img/1.png',
                    IsFirst: false

                }, {
                    Title: '二次开发',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    BgImgUrl: 'assets/img/parallax_bg.jpg',
                    ImgUrl: 'assets/img/1.png',
                    IsFirst: false
                }]
            },
            companyInfo: {
                Title: '公司简介',
                Abstract: '  深圳筑星科技有限公司以工程领域信息化为驱动，以智慧城市为目标，公司专注于工程领域施工与运维阶段的BIM服务，致力于建设领域 BIM及信息技术的产品与服务，具有深厚的行业背景和丰富的从业经验。公司核心团队由毕业于清华大学的博士、硕士组成，自主研发了技术领先并具有自主知识产权的BIM-STAR平台。筑星科技作为BIM行业的开拓者和领先者，在轨道交通、桥梁、机场、城市综合体等多个领域，深入探索了BIM技术在工程施工与运维阶段的应用，其中包括广州地铁、国家体育馆鸟巢等项目。',
                ImgUrl: 'assets/img/1.png',
            },
            honorInfo: {
                Title: '荣誉资质',
                Abstract: '  深圳筑星科技有限公司以工程领域信息化为驱动，以智慧城市为目标，公司专注于工程领域施工与运维阶段的BIM服务，致力于建设领域 BIM及信息技术的产品与服务，具有深厚的行业背景和丰富的从业经验。公司核心团队由毕业于清华大学的博士、硕士组成，自主研发了技术领先并具有自主知识产权的BIM-STAR平台。筑星科技作为BIM行业的开拓者和领先者，在轨道交通、桥梁、机场、城市综合体等多个领域，深入探索了BIM技术在工程施工与运维阶段的应用，其中包括广州地铁、国家体育馆鸟巢等项目。',
                ImgUrls: [{
                    ImgUrl: 'assets/img/1.png'
                }, {
                    ImgUrl: 'assets/img/1.png'
                }, {
                    ImgUrl: 'assets/img/1.png'
                }, {
                    ImgUrl: 'assets/img/1.png'
                }]
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
                            app.teamInfo.Teams = [{
                                Name: 'SB GHH STAR',
                                Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                                ImgUrl: 'assets/img/team/member1.jpg'
                            }, {
                                Name: 'SB GHH STAR',
                                Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                                ImgUrl: 'assets/img/team/member3.jpg'
                            }, {
                                Name: 'SB GHH STAR',
                                Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。程序就是整治细节最好的工具。于是，现在我们的所有工作，无时无处不在强调程序。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                                ImgUrl: 'assets/img/team/member4.jpg'
                            }];
                        }
                    });
                }
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
    $(document).ready(function () {
        $("#immersive_slider").immersive_slider({
            container: ".bs_parallax"
        });
    });
});