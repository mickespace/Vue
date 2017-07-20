require.config({
    baseUrl: "../../lib",
    paths: {
        "vue": "vue/vue",
        "jquery": "jquery/jquery.min",
        "bootstrap": "bootstrap/bootstrap",
        "lazyload": "jquery/lazyload",
        "bstarData": "../views/about/joinData",
    },
    shim: {
        'vue': {
            export: 'vue'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'lazyload': {
            deps: ['jquery']
        }
    }
});

require(['vue', 'jquery', 'bootstrap', 'bstarData', 'lazyload'], function (vue, jquery, bootstrap, bstarData, lazyload) {
    var app = new vue({
        el: '#app',
        data: {
            isbusy: false,
            NoticeInfo: bstarData.NoticeData,
            JoinInfo: bstarData.JoinData,
            SearchInfo: bstarData.SearchData,
            WelfareInfo: bstarData.WelfareData,
            JobInfo: bstarData.JobData,
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
                //加载工作数据
                Onload: function () {

                }
            }
        }
    });

    $("img.lazy").lazyload({
        effect: "fadeIn"
    })
});