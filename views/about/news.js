require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "bootsnav": "bootstrap/bootsnav",
        "carousel": "carousel/carousel",
        "modernizr": "parallax/modernizr",
        "toolbar": "toolbar/toolbar",
        "lazyload": "jquery/lazyload",
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
        'carousel': {
            deps: ['jquery'],
            export: 'carousel'
        },
        'toolbar': {
            export: 'toolbar'
        },
        'lazyload': {
            deps: ['jquery'],
            export: 'lazyload'
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'bootsnav', 'carousel', 'modernizr', 'toolbar', 'lazyload'], function (vue, jquery, bootstrap, bootsnav, carousel, modernizr, toolbar, lazyload) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            newsInfo: {
                Title: '筑星新闻',
                Abstract: '想了解我们更多，那就关注我们的新闻动态吧。',
                News: [{
                    Id: 1,
                    Title: '震撼发布',
                    Abstract: '这就是新闻，具有傻逼性质的文字描述就是新闻，具有傻逼性质的文字描述就是新闻，具有傻逼性质的文字描述就是新闻，具有傻逼性质的文字描述就是新闻，具有傻逼性质的文字描述事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    Author: '陈俊良',
                    CreateDate: '2017-07-07',
                    ImgUrl: 'assets/img/news/news.jpg'
                }, {
                    Id: 2,
                    Title: '震撼发布',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    Author: '陈俊良',
                    Content: 'asdfasdfasdf',
                    CreateDate: '2017-07-07',
                    ImgUrl: 'assets/img/news/news.jpg'
                }, {
                    Id: 3,
                    Title: '震撼发布',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    Author: '陈俊良',
                    Content: 'asdfasdfasdf',
                    CreateDate: '2017-07-07',
                    ImgUrl: 'assets/img/news/news.jpg'
                }, {
                    Id: 4,
                    Title: '震撼发布',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    Author: '陈俊良',
                    Content: 'asdfasdfasdf',
                    CreateDate: '2017-07-07',
                    ImgUrl: 'assets/img/news/news.jpg'
                }, {
                    Id: 5,
                    Title: '震撼发布',
                    Abstract: '任何单位任何事情，首先强调的就是程序，因为管理界有句名言：细节决定成败。。因为有了规范的办事程序，现在我们这些平民百姓到政府机关办事比原来容易了许多，最起码知道办什么事该找哪个部门，知道办这个事应该用多长时间了。政府公开办事程序，也拉近了',
                    Author: '陈俊良',
                    CreateDate: '2017-07-07',
                    Content: 'asdfasdfasdf',
                    ImgUrl: 'assets/img/news/news.jpg'
                }, ]
            },
            methods: {
                handleDetail: function (Id) {
                    $(location).attr('href', 'newsdetail.html?newId=' + Id);
                }
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});