var page_config = {
    basic: {
        js: [
            {
                name: "swip",
                url: "swip.js",
                sync: false
            }, {
                name: "action",
                url: "action.js",
                sync: false
            }, {
                name: "scene",
                url: "scene.js",
                sync: false
            }, {
                name: "fastclick",
                url: "fastclick.min.js",
                sync: true
            }, {
                name: "render",
                url: "render.js",
                sync: false
            }, {
                name: "world",
                url: "world.js",
                sync: false
            }, {
                name: "jquery",
                url: "../vendor/jquery/2.1.3.min.js",
                sync: true
            }, {
                name: "jweixin",
                url: "http://res.wx.qq.com/open/js/jweixin-1.0.0.js",
                sync: true
            }, {
                name: "wechat",
                url: "wechat.js",
                sync: true
            }, {
                name: "jstween",
                url: "../vendor/jstween/jstween.min.js",
                sync: true
            }, {
                name: "css3d",
                url: "../vendor/css3d/css3d.min.js",
                sync: true
            }, {
                name: "orienter",
                url: "../vendor/orienter/orienter.min.js",
                sync: true
            }
        ],
        css: [
            {
                name: "style",
                url: "style.css",
                sync: false
            }, {
                name: "animate",
                url: "animation.css",
                sync: false
            }, {
                name: "animateplus",
                url: "animate.plus.css",
                sync: false
            }
        ],
        images: [
            ['music/{i}.png', 1, 3, 1],
            ['cg1/{i}.png', 1, 50, 1],
            ['mouse/{i}.png', 1, 2, 1],
            ['{i}/banner.png', 1, 10, 1],
            ['{i}/bg.jpg', 1, 10, 1],
            ['{i}/card.png', 1, 11, 1],
            ['{i}/food1.png', 1, 10, 1],
            ['{i}/food2.png', 1, 10, 1],
            ['{i}/food3.png', 1, 10, 1],
            ['{i}/food4.png', 1, 10, 1],
            ['{i}/txt.png', 1, 10, 1],
            ['{i}/play.jpg', 1, 10, 1],
            ['360/i{i}.jpg', 1, 30, 1],
            ['house/{i}.png', 1, 30, 1],
            'music/off.png',
            'coupon/code.png'
        ]
    },
    pages: [
        {
            dom: [
                {
                    type: "img",
                    src: "page1/bg.jpg",
                    comment: "背景",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "img",
                    src: "page1/logo.png",
                    comment: "logo",
                    rect: {
                        w: 43,
                        h: 45,
                        x: -21,
                        y: 10
                    }
                }, {
                    type: "img",
                    src: "page1/text.png",
                    comment: "文字",
                    class: "fadeIn animated",
                    rect: {
                        w: 247,
                        h: 45,
                        x: -123,
                        y: 368
                    }
                }, {
                    type: "img",
                    src: "page1/start.png",
                    class: "zoomIn animated",
                    comment: "文字",
                    rect: {
                        w: 95,
                        h: 15,
                        x: -47,
                        y: 433
                    }
                }, {
                    type: "img",
                    src: "page1/triangle.png",
                    comment: "三角形",
                    class: "notice",
                    rect: {
                        w: 41,
                        h: 20,
                        x: -20,
                        y: 460
                    }
                }, {
                    type: "img",
                    src: "page1/tree.png",
                    comment: "树",
                    rect: {
                        w: 320,
                        h: 347,
                        x: -160,
                        y: 20
                    }
                }, {
                    type: "img",
                    src: "page1/fork.png",
                    comment: "叉子",
                    class: "rotate delay-5",
                    rect: {
                        w: 44,
                        h: 55,
                        x: -2,
                        y: 292
                    }
                }, {
                    type: "img",
                    src: "page1/border.png",
                    comment: "边框",
                    rect: {
                        w: 234,
                        h: 234,
                        x: -117,
                        y: 82
                    }
                }, {
                    type: "img",
                    src: "page1/border1.png",
                    comment: "边框",
                    rect: {
                        w: 234,
                        h: 234,
                        x: -117,
                        y: 82
                    }
                }, {
                    type: "img",
                    src: "page1/border2.png",
                    comment: "边框",
                    rect: {
                        w: 234,
                        h: 234,
                        x: -117,
                        y: 82
                    }
                }, {
                    type: "img",
                    src: "page1/bird.png",
                    comment: "鸟",
                    rect: {
                        w: 56,
                        h: 53,
                        x: 17,
                        y: 57
                    }
                }, {
                    type: "img",
                    src: "page1/mouse2.png",
                    id: "mouse",
                    comment: "鸟",
                    rect: {
                        w: 8,
                        h: 8,
                        x: 18,
                        y: 57
                    }
                }, {
                    type: "img",
                    src: "page1/eye.png",
                    comment: "鸟",
                    rect: {
                        w: 2,
                        h: 2,
                        x: 25,
                        y: 59
                    }
                }, {
                    type: "img",
                    src: "page1/luo1.png",
                    comment: "落叶",
                    class: 'luo1',
                    rect: {
                        w: 12,
                        h: 13,
                        x: -69,
                        y: 307
                    }
                }, {
                    type: "img",
                    src: "page1/luo2.png",
                    comment: "落叶",
                    class: 'luo2',
                    rect: {
                        w: 14,
                        h: 20,
                        x: 80,
                        y: 299
                    }
                }, {
                    type: "img",
                    src: "page1/luo3.png",
                    comment: "落叶",
                    class: 'luo3',
                    rect: {
                        w: 26,
                        h: 30,
                        x: -81,
                        y: 228
                    }
                }, {
                    type: "img",
                    src: "page1/luo4.png",
                    comment: "落叶",
                    class: 'luo4',
                    rect: {
                        w: 8,
                        h: 26,
                        x: 65,
                        y: 307
                    }
                }, {
                    type: "img",
                    src: "page1/txt.png",
                    comment: "春季赏味",
                    rect: {
                        w: 227,
                        h: 168,
                        x: -113,
                        y: 121
                    }
                }, {
                    type: "img",
                    src: "page1/txtShade1.png",
                    comment: "阴影",
                    rect: {
                        w: 205,
                        h: 148,
                        x: -101,
                        y: 130
                    }
                }, {
                    type: "img",
                    src: "page1/txtShade2.png",
                    comment: "阴影",
                    rect: {
                        w: 205,
                        h: 148,
                        x: -102,
                        y: 130
                    }
                }, {
                    type: "img",
                    src: "page1/flower.png",
                    comment: "花",
                    rect: {
                        w: 32,
                        h: 31,
                        x: 11,
                        y: 170
                    }
                }, {
                    type: "img",
                    src: "page1/redCake.png",
                    comment: "草莓蛋糕",
                    class: "upDown delay-10",
                    rect: {
                        w: 45,
                        h: 45,
                        x: 86,
                        y: 197
                    }
                }, {
                    type: "img",
                    src: "page1/greenCake.png",
                    comment: "抹茶蛋糕",
                    class: "upDown",
                    rect: {
                        w: 38,
                        h: 37,
                        x: -26,
                        y: 294
                    }
                }, {
                    type: "img",
                    src: "page1/spoon.png",
                    comment: "勺子",
                    class: "rotate",
                    rect: {
                        w: 54,
                        h: 31,
                        x: 85,
                        y: 168
                    }
                }, {
                    type: "img",
                    src: "page1/cup.png",
                    comment: "杯子",
                    class: "rotate",
                    rect: {
                        w: 73,
                        h: 68,
                        x: -141,
                        y: 182
                    }
                }, {
                    type: "img",
                    src: "page1/lime.png",
                    comment: "柠檬",
                    class: "upDown delay-5",
                    rect: {
                        w: 48,
                        h: 43,
                        x: -56,
                        y: 189
                    }
                }, {
                    type: "img",
                    src: "page1/greenery1.png",
                    comment: "绿叶",
                    rect: {
                        w: 48,
                        h: 60,
                        x: -102,
                        y: 200
                    }
                }, {
                    type: "img",
                    src: "page1/upFlower.png",
                    comment: "上面花",
                    rect: {
                        w: 215,
                        h: 223,
                        x: -108,
                        y: 101
                    }
                }, {
                    type: "div",
                    comment: "开启",
                    rect: {
                        w: 200,
                        h: 70,
                        x: -100,
                        y: 423
                    },
                    real_click: "start"
                }
            ],
            id: "page_index",
            played: false,
            waiting: false,
            finished: false,
            isRender: false
        }, {
            dom: [
                {
                    type: "img",
                    src: "1/bg.jpg",
                    comment: "背景",
                    id: 'gameBg',
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "img",
                    src: "1/banner.png",
                    comment: "banner",
                    id: "gameBanner",
                    rect: {
                        w: 400,
                        h: 137,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "img",
                    src: "game/time.png",
                    comment: "时间",
                    rect: {
                        w: 371,
                        h: 141,
                        x: -185,
                        y: 42
                    }
                }, {
                    type: "div",
                    comment: "倒计时",
                    id: "countDown",
                    html: "20",
                    rect: {
                        w: 40,
                        h: 30,
                        x: -100,
                        y: 90
                    }
                }, {
                    type: "div",
                    comment: "份数",
                    id: "quantity",
                    html: "0",
                    rect: {
                        w: 40,
                        h: 30,
                        x: 62,
                        y: 90
                    }
                }, {
                    type: "div",
                    comment: "游戏区域",
                    id: "gameBox",
                    rect: {
                        w: 320,
                        h: 335,
                        x: -160,
                        y: 165
                    }
                }, {
                    type: "img",
                    comment: "游戏结束",
                    src: "game/pass.png?v=2",
                    class: "pass disappear",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "img",
                    comment: "试试手气",
                    class: "pass disappear",
                    rect: {
                        w: 180,
                        h: 40,
                        x: -90,
                        y: 315
                    },
                    real_click: "try"
                }, {
                    type: "img",
                    comment: "游戏结束",
                    src: "game/defeated.png",
                    class: "defeated disappear",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "img",
                    class: "cover  noticeShare disappear",
                    comment: "提示分享",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -205,
                        y: 0
                    }
                }, {
                    type: "img",
                    class: "cover noticeShare disappear",
                    src: 'tishi.png',
                    comment: "提示分享",
                    rect: {
                        w: 247,
                        h: 116,
                        x: -123,
                        y: 170
                    }
                }, {
                    type: "img",
                    class: "noticeShare disappear",
                    comment: "提示分享",
                    rect: {
                        w: 50,
                        h: 50,
                        x: 81,
                        y: 164
                    },
                    real_click: 'closeShare',
                }, {
                    type: "img",
                    class: "cover  noticeNo disappear",
                    comment: "次数用完",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -205,
                        y: 0
                    }
                }, {
                    type: "img",
                    class: "cover noticeNo disappear",
                    src: 'no.png',
                    comment: "次数用完",
                    rect: {
                        w: 252,
                        h: 204,
                        x: -126,
                        y: 140
                    }
                }, {
                    type: "img",
                    class: " noticeNo disappear",
                    comment: "次数用完",
                    rect: {
                        w: 50,
                        h: 50,
                        x: 81,
                        y: 133
                    },
                    real_click: 'closeNo',
                }, {
                    type: "img",
                    class: " noticeNo disappear",
                    comment: "次数用完",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 261
                    },
                    real_click: 'look',
                }, {
                    type: "img",
                    comment: "再试一次",
                    class: "defeated disappear",
                    rect: {
                        w: 180,
                        h: 40,
                        x: -90,
                        y: 265
                    },
                    real_click: "again"
                }, {
                    type: "img",
                    comment: "看看其他店铺",
                    class: "defeated disappear",
                    rect: {
                        w: 180,
                        h: 40,
                        x: -90,
                        y: 315
                    },
                    real_click: "look"
                }

            ],
            id: "page_game",
            played: false,
            waiting: false,
            finished: false,
            isRender: false
        }, {
            dom: [
                {
                    type: "img",
                    src: "game/down.jpg",
                    comment: "我要挑战",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "img",
                    src: "1/txt.png",
                    id: "startTxt",
                    comment: "文字",
                    rect: {
                        w: 270,
                        h: 320,
                        x: -135,
                        y: 36
                    }
                }, {
                    type: "img",
                    src: "game/up.png",
                    comment: "我要挑战",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -205,
                        y: 0
                    }
                }, {
                    type: "img",
                    class: "cover  noticeShare disappear",
                    comment: "提示分享",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -205,
                        y: 0
                    }
                }, {
                    type: "img",
                    class: "cover noticeShare disappear",
                    src: 'tishi.png',
                    comment: "提示分享",
                    rect: {
                        w: 247,
                        h: 116,
                        x: -123,
                        y: 170
                    }
                }, {
                    type: "img",
                    class: "noticeShare disappear",
                    comment: "提示分享",
                    rect: {
                        w: 50,
                        h: 50,
                        x: 81,
                        y: 164
                    },
                    real_click: 'closeShare',
                }, {
                    type: "img",
                    class: "cover  noticeNo disappear",
                    comment: "次数用完",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -205,
                        y: 0
                    }
                }, {
                    type: "img",
                    class: "cover noticeNo disappear",
                    src: 'no.png',
                    comment: "次数用完",
                    rect: {
                        w: 252,
                        h: 204,
                        x: -126,
                        y: 140
                    }
                }, {
                    type: "img",
                    class: " noticeNo disappear",
                    comment: "次数用完",
                    rect: {
                        w: 50,
                        h: 50,
                        x: 81,
                        y: 133
                    },
                    real_click: 'closeNo',
                }, {
                    type: "img",
                    class: " noticeNo disappear",
                    comment: "次数用完",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 261
                    },
                    real_click: 'look',
                },  {
                    type: "img",
                    class: "cover noPromotion disappear",
                    comment: "没有优惠券",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "img",
                    class: "noPromotion disappear",
                    src:'noPro.png',
                    comment: "没有优惠券",
                    rect: {
                        w: 252,
                        h: 122,
                        x: -126,
                        y: 155
                    }
                },{
                    type: "img",
                    class: "noPromotion disappear",
                    comment: "没有优惠券",
                    rect: {
                        w: 50,
                        h: 50,
                        x: 77,
                        y: 155
                    },
                    real_click:'closeNoPro'
                },{
                    type: "div",
                    comment: "我要挑战",
                    rect: {
                        w: 150,
                        h: 40,
                        x: -75,
                        y: 370
                    },
                    real_click: 'challenge'
                }, {
                    type: "div",
                    comment: "活动规则",
                    rect: {
                        w: 150,
                        h: 40,
                        x: -75,
                        y: 410
                    },
                    real_click: 'gameRules'
                }, {
                    type: "div",
                    comment: "关闭",
                    rect: {
                        w: 50,
                        h: 50,
                        x: -25,
                        y: 454
                    },
                    real_click: 'closeStart'
                }, {
                    type: "div",
                    comment: "我的优惠券",
                    rect: {
                        w: 50,
                        h: 60,
                        x: 80,
                        y: 377
                    },
                    real_click: 'myList',
                    args: 1
                }
            ],
            id: "page_start",
            played: false,
            waiting: false,
            finished: false,
            isRender: false
        }, {
            dom: [
                {
                    type: "img",
                    src: "1/play.jpg",
                    comment: "play",
                    id: 'play',
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "img",
                    comment: "play",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 350
                    },
                    real_click: "play"
                },
            ],
            id: "page_play",
            played: false,
            waiting: false,
            finished: false,
            isRender: false
        }, {
            dom: [
                {
                    type: "img",
                    src: "game/rules.jpg",
                    comment: "我要挑战",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "img",
                    comment: "play",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 438
                    },
                    real_click: "rulesReturn"
                }, {
                    type: "div",
                    html: "<p class='title'>活动规则</p>" +
                    "<div><span class='title1'>活动时间：</span>2017年4月6日-5月21日</div>" +
                    "<div><span class='title1'>游戏玩法：</span>拖动“春季赏味”地图，点击进入店铺页面，完成游戏后即可参与抽奖，每人每天每家店限抽2次。" +
                    "分享朋友圈增加一次抽奖机会,抽到的10元/20元/50元“美食优惠券”请于5月21日22：00前至大上海时代广场X楼服务台兑换实体券，" +
                    "“霸王餐”奖券请至指定店铺兑换指定产品，奖券一经核销概不退换。奖券仅限本人兑换，逾期作废。本活动最终解释权由大上海时代广场及活动店铺所有。</div>" +

                    "<h4>10元美食优惠券</h4><div>本券仅限于以下商家使用，不可兑换现金，不设找零，不提供发票，" +
                    "一旦兑换不可撤销,遗失不补；丸龟制面、潮民冰室、极面、恋暖の初茶、滩悦、翰林轩、悠乐、石板街 、赤坂舞马雅、游香食乐、太平洋咖啡</div>" +
                    "<h4>20元美食优惠券</h4>" +
                    "<div>本券仅限于以下商家使用，不可兑换现金，不设找零，不提供发票，一旦兑换不可撤销,遗失不补;" +
                    "潮民冰室、极面、滩悦、翰林轩、悠乐、石板街 、赤坂舞马雅、游香食乐</div>" +
                    "<h4>50元美食优惠券</h4><div>本券仅限于以下商家使用，不可兑换现金，不设找零，不提供发票，一旦兑换不可撤销,遗失不补；" +
                    "潮民冰室、滩悦、翰林轩、石板街 、赤坂舞马雅</div>" +

                    "<h4>丸龟制面-价值40元的单人套餐优惠券</h4>" +
                    "<div>1. 请于2017年5月21日22:00前至大上海时代广场丸龟制面店铺兑换;" +
                    "2.本券仅限中奖者本人持中奖微信号于店铺兑换指定产品,扫描二维码验证成功后即可兑换,本券不得转让;" +
                    "3. 本券最终解释权由大上海时代广场及活动店铺所有</div>" +
                    "<h4>游香食乐-猪排蛋包饭优惠券</h4>" +
                    "<div>1. 请于2017年5月21日22:00前至大上海时代广场丸龟制面店铺兑换；</div>" +
                    "<div>2. 本券仅限中奖者本人持中奖微信号于店铺兑换指定产品，扫描二维码验证成功后即可兑换，本券不得转让；</div>" +
                    "<div>3. 本券最终解释权由大上海时代广场及活动店铺所有。</div>" +
                    "<h4>Pacific Coffee-指定饮品优惠券</h4>" +
                    "<div>1. 请于2017年5月21日22:00前至大上海时代广场丸龟制面店铺兑换；</div>" +
                    "<div>2. 本券仅限中奖者本人持中奖微信号于店铺兑换指定产品，扫描二维码验证成功后即可兑换，本券不得转让；</div>" +
                    "<div>3. 本券最终解释权由大上海时代广场及活动店铺所有。</div>" +
                    "<h4>石板街-晚市（17:00后）饮品第二杯半价优惠券</h4>" +
                    "<div>1. 请于2017年5月21日22:00前至大上海时代广场丸龟制面店铺兑换；</div>" +
                    "<div>2. 本券仅限中奖者本人持中奖微信号于店铺兑换指定产品，扫描二维码验证成功后即可兑换，本券不得转让；</div>" +
                    "<div>3. 此优惠仅限晚市（17:00后）使用；</div>" +
                    "<div>4. 本券最终解释权由大上海时代广场及活动店铺所有。</div>" +
                    "<h4>悠乐-指定晚市套餐（17:30后）买一赠一优惠券</h4>" +
                    "<div>1. 请于2017年5月21日22:00前至大上海时代广场丸龟制面店铺兑换；</div>" +
                    "<div>2. 本券仅限中奖者本人持中奖微信号于店铺兑换指定产品，扫描二维码验证成功后即可兑换，本券不得转让；</div>" +
                    "<div>3. 此优惠仅限晚市（17:30后）使用；</div>" +
                    "<div>4. 本券最终解释权由大上海时代广场及活动店铺所有。</div><br/>" +
                    "<div>地址：上海市淮海中路99好大上海时代广场</div>" +
                    "<div>客服电话：021-31228766</div>" +
                    "<div>所有优惠仅限于大上海时代广场指定商户使用</div>",
                    class: "rulesBox",
                    rect: {
                        w: 210,
                        h: 340,
                        x: -105,
                        y: 50
                    }
                },
            ],
            id: "page_rules",
            played: false,
            waiting: false,
            finished: false,
            isRender: false
        }, {
            dom: [
                {
                    type: "img",
                    src: "bg.jpg",
                    comment: "背景",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "div",
                    comment: "背景",
                    html: "<div id='codeBox'></div>",
                    id: "lunbo",
                    rect: {
                        w: 270,
                        h: 360,
                        x: -135,
                        y: -4
                    }
                }, {
                    type: "div",
                    comment: "背景",
                    id: "dotBox",
                    rect: {
                        w: 200,
                        h: 10,
                        x: -50,
                        y: 380
                    }
                }, {
                    type: "img",
                    src: "coupon/return.png",
                    comment: "返回",
                    rect: {
                        w: 162,
                        h: 64,
                        x: -81,
                        y: 450
                    }
                },  {
                    type: "img",
                    src: "coupon/add.png",
                    comment: "地址",
                    rect: {
                        w: 219,
                        h: 45,
                        x: -110,
                        y: 400
                    }
                },  {
                    type: "div",
                    comment: "背景",
                    id: "proReturn",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 451
                    },
                    real_click: 'proReturn'
                }
            ],
            id: "page_promotion",
            played: false,
            waiting: false,
            finished: false,
            isRender: false
        }, {
            dom: [
                {
                    type: "img",
                    comment: "抽中",
                    src: "game/success.png",
                    class: "success",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "div",
                    html: '元优惠券',
                    id:"awardTxt",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -93,
                        y: 129
                    }
                }, {
                    type: "div",
                    html: '20',
                    id:'awardNum',
                    rect: {
                        w: 50,
                        h: 50,
                        x: -55,
                        y: 129
                    }
                },  {
                    type: "div",
                    id: 'awardCode',
                    src:'code.png',
                    rect: {
                        w: 80,
                        h: 80,
                        x: -40,
                        y: 170
                    }
                }, {
                    type: "div",
                    html: '535987461',
                    id:"awardList",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 260
                    }
                }, {
                    type: "img",
                    comment: "查看其它优惠券",
                    class: "success",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 312
                    },
                    real_click: 'myList',
                    args: 2
                }, {
                    type: "img",
                    comment: "逛其它店铺",
                    class: "success",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 365
                    },
                    real_click: 'look'
                }, {
                    type: "img",
                    comment: "分享",
                    class: "success",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 436
                    },
                    real_click: 'share'
                }, {
                    type: "div",
                    comment: "分享",
                    class: "cover pop disappear",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    },
                    real_click: 'pop'
                }, {
                    type: "div",
                    comment: "分享",
                    src: "game/share.png",
                    class: "pop disappear",
                    rect: {
                        w: 320,
                        h: 292,
                        x: -160,
                        y: 0
                    }
                }, {
                    type: "div",
                    comment: "分享",
                    src: "cg1/1.png",
                    id: "flower",
                    class: "pop disappear",
                    rect: {
                        w: 150,
                        h: 157,
                        x: 10,
                        y: 0
                    }
                }
            ],
            id: "page_award",
            played: false,
            waiting: false,
            finished: false,
            isRender: false
        }, {
            dom: [
                {
                    type: "img",
                    comment: "没抽中",
                    src: "game/noAward.png",
                    class: "noAward ",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    }
                }, {
                    type: "img",
                    comment: "查看其它优惠券",
                    class: "noAward ",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 312
                    },
                    real_click: 'myList',
                    args: 3
                }, {
                    type: "img",
                    comment: "逛其它店铺",
                    class: "noAward ",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 365
                    },
                    real_click: 'look'
                }, {
                    type: "img",
                    comment: "分享",
                    class: "noAward",
                    rect: {
                        w: 200,
                        h: 50,
                        x: -100,
                        y: 436
                    },
                    real_click: 'share'
                }, {
                    type: "div",
                    comment: "分享",
                    class: "cover pop disappear",
                    rect: {
                        w: 400,
                        h: 504,
                        x: -200,
                        y: 0
                    },
                    real_click: 'pop'
                }, {
                    type: "div",
                    comment: "分享",
                    src: "game/share.png",
                    class: "pop disappear",
                    rect: {
                        w: 320,
                        h: 292,
                        x: -160,
                        y: 0
                    }
                }, {
                    type: "div",
                    comment: "分享",
                    src: "cg1/1.png",
                    id: "flower",
                    class: "pop disappear",
                    rect: {
                        w: 150,
                        h: 157,
                        x: 10,
                        y: 0
                    }
                }
            ],
            id: "page_noAward",
            played: false,
            waiting: false,
            finished: false,
            isRender: false
        }
    ]
};
