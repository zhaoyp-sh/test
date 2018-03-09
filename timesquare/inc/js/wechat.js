var weixin_jssdk_ops = {
    init: function () {
        this.initJSconfig();
    },
    shareCbf: function () {
    },
    friTitle: '春季赏味地图，美食优惠券等你来~',
    friDesc: '美味时代，和我一起开启春季赏味之旅吧！',
    initJSconfig: function () {
        $.ajax({
            url: 'https://api.happy-share.cn/jssdk/?url=' + encodeURIComponent(location.href.split('#')[0]),
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    var appId = data.data.appId;
                    var timestamp = data.data.timestamp;
                    var nonceStr = data.data.nonceStr;
                    var signature = data.data.signature;
                    wx.config({
                        debug: false,
                        appId: appId,
                        timestamp: timestamp,
                        nonceStr: nonceStr,
                        signature: signature,
                        jsApiList: [
                            'onMenuShareTimeline', 'onMenuShareAppMessage'
                        ]
                    });
                    weixin_jssdk_ops.ready();
                    wx.error(function (res) {
                        //console.log(res);
                    });
                }
            }
        });
    },
    ready: function(){
        wx.ready(function () {
            var img = 'http://demo.happy-share.cn/2017/timessquare/inc/image/wheel.png';
            var link = window.location.href;

            wx.onMenuShareTimeline({
                title: weixin_jssdk_ops.friDesc,
                imgUrl: img,
                link: link,
                success: function () {
                    weixin_jssdk_ops.shareCbf();
                },
                cancel: function () {
                }
            });
            wx.onMenuShareAppMessage({
                title: weixin_jssdk_ops.friTitle,
                desc: weixin_jssdk_ops.friDesc,
                link: link,
                imgUrl: img,
                type: 'link',
                success: function () {

                },
                cancel: function () {
                }
            });

        });
    },
    hideMenuItems: function () {
        wx.ready(function () {
            wx.hideAllNonBaseMenuItem();
        });
    }
};