/**
 * Created by vtm2k7 on 16/8/24.
 * @desc Happy-Share Wechat HTML5 FrameWork Render v1.0
 * @author stupidchen@gmail.com
 */

var World = function () {
    this.isDrag = false;
    this.isLoop = true;
    this.background;
    this.house;
    this.plant;
    this.cover;
    this.two;
    this.title;
    this.toIds = [];
    this.init();
};

World.prototype = {
    init: function () {
        var that = this;
        var s = new C3D.Stage();
        s.size(window.innerWidth, window.innerHeight).material({}).update();
        document.getElementById('bg').appendChild(s.el);

        // 初始化背景
        this.background = this.genBg();
        this.background.position(0, 0, -550).updateT();
        s.addChild(this.background);
        this.house = this.genHouse();
        this.house.position(0, 0, -500).updateT();
        s.addChild(this.house);
        this.plant = this.genPlant();
        this.plant.position(0, 0, -440).updateT();
        s.addChild(this.plant);
        this.cover = this.genCover();
        this.cover.position(0, 0, -500).updateT();
        s.addChild(this.cover);
        this.two = this.genTwo();
        this.two.position(0, 0, -440).updateT();
        s.addChild(this.two);
        this.title = this.genTitle();
        this.title.position(0, 0, -430).updateT();
        s.addChild(this.title);
    },
    start: function () {
        var that = this;
        var background = this.background;
        var cover = this.cover;
        var plant = this.plant;
        var house = this.house;
        var two = this.two;
        var title = this.title;
        function looop() {
            if (that.isLoop) {
                var t = (d.lon + f.lon + c.lon) % 360, i = .35 * (d.lat + f.lat + c.lat);
                t - background.rotationY > 180 && (background.rotationY += 360);
                t - background.rotationY < -180 && (background.rotationY -= 360);
                background.rotationY += .3 * (t - background.rotationY);

                background.rotationX += .15 * (i - background.rotationX);
                if (background.rotationX > 30) background.rotationX = 30;
                if (background.rotationX < -30) background.rotationX = -30;

                title.rotationY = two.rotationY = house.rotationY = cover.rotationY = plant.rotationY = background.rotationY;
                title.rotationX = two.rotationX = house.rotationX = cover.rotationX = plant.rotationX = background.rotationX;
                background.updateT();
                house.updateT();
                plant.updateT();
                cover.updateT();
                two.updateT();
                title.updateT();
                requestAnimationFrame(looop);
            }

        }


        requestAnimationFrame(looop);

        var c = {lon: 0, lat: 0};
        var repeatCnt = 500;
        var speed = 30;

        function auto() {
            c.lon += repeatCnt / speed;
            repeatCnt = repeatCnt - repeatCnt / speed;
            if (repeatCnt > 1)setTimeout(auto, 50);
        }

        auto();

        $('#main').drag(function (t) {
            if (t.done) {
                setTimeout(function () {
                    that.isDrag = false
                }, 100);
            } else {
                that.isDrag = !t.done;
            }

            p || (c.lon = (c.lon - .2 * t.ax) % 360, c.lat = Math.max(-90, Math.min(90, c.lat + .2 * t.ay)))
        });
        var A, d = {lat: 0, lon: 0}, f = {lon: 0, lat: 0}, p = false, g = new Orienter;
        g.handler = function (t) {
            d.lat = t.lat;
            d.lon = -t.lon;
            p && (f.lat = -d.lat, f.lon = -d.lon)
        };
        g.init()
    },
    genBg: function () {
        var rect = {w: 2100, h: 1170};
        var imgs = [
            {url: ROOT_URL+'/image/360/i1.jpg'},
            {url: ROOT_URL+'/image/360/i2.jpg'},
            {url: ROOT_URL+'/image/360/i3.jpg'},
            {url: ROOT_URL+'/image/360/i4.jpg'},
            {url: ROOT_URL+'/image/360/i5.jpg'},
            {url: ROOT_URL+'/image/360/i6.jpg'},
            {url: ROOT_URL+'/image/360/i7.jpg'},
            {url: ROOT_URL+'/image/360/i8.jpg'},
            {url: ROOT_URL+'/image/360/i9.jpg'},
            {url: ROOT_URL+'/image/360/i10.jpg'},
            {url: ROOT_URL+'/image/360/i11.jpg'},
            {url: ROOT_URL+'/image/360/i12.jpg'},
            {url: ROOT_URL+'/image/360/i13.jpg'},
            {url: ROOT_URL+'/image/360/i14.jpg'},
            {url: ROOT_URL+'/image/360/i15.jpg'},
            {url: ROOT_URL+'/image/360/i16.jpg'},
            {url: ROOT_URL+'/image/360/i17.jpg'},
            {url: ROOT_URL+'/image/360/i18.jpg'},
            {url: ROOT_URL+'/image/360/i19.jpg'},
            {url: ROOT_URL+'/image/360/i20.jpg'},
            {url: ROOT_URL+'/image/360/i21.jpg'},
            {url: ROOT_URL+'/image/360/i22.jpg'},
            {url: ROOT_URL+'/image/360/i23.jpg'},
            {url: ROOT_URL+'/image/360/i24.jpg'},
            {url: ROOT_URL+'/image/360/i25.jpg'},
            {url: ROOT_URL+'/image/360/i26.jpg'},
            {url: ROOT_URL+'/image/360/i27.jpg'},
            {url: ROOT_URL+'/image/360/i28.jpg'},
            {url: ROOT_URL+'/image/360/i29.jpg'},
            {url: ROOT_URL+'/image/360/i30.jpg'}
        ];

        var _len = imgs.length;
        var _step = rect.w / _len;
        var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len));
        var _sp = new C3D.Sprite();
        for (var i = 0; i < _len; i++) {
            var _p = new C3D.Plane();
            var _r = 360 / _len * i;
            var _a = Math.PI * 2 / _len * i;
            _p.size(_step, rect.h).position(Math.sin(_a) * _radius, 0, -Math.cos(_a) * _radius).rotation(0, -_r, 0).material({
                image: imgs[i].url,
                repeat: 'no-repeat',
                bothsides: false
            }).update();
            _sp.addChild(_p);
        }
        return _sp;
    },
    genHouse: function () {
        var rect = {w: 2100, h: 1170};
        var imgs = [
            {url: ROOT_URL+'/image/house/1.png'},
            {url: ROOT_URL+'/image/house/2.png'},
            {url: ROOT_URL+'/image/house/3.png'},
            {url: ROOT_URL+'/image/house/4.png'},
            {url: ROOT_URL+'/image/house/5.png'},
            {url: ROOT_URL+'/image/house/6.png'},
            {url: ROOT_URL+'/image/house/7.png'},
            {url: ROOT_URL+'/image/house/8.png'},
            {url: ROOT_URL+'/image/house/9.png'},
            {url: ROOT_URL+'/image/house/10.png'},
            {url: ROOT_URL+'/image/house/11.png'},
            {url: ROOT_URL+'/image/house/12.png'},
            {url: ROOT_URL+'/image/house/13.png'},
            {url: ROOT_URL+'/image/house/14.png'},
            {url: ROOT_URL+'/image/house/15.png'},
            {url: ROOT_URL+'/image/house/16.png'},
            {url: ROOT_URL+'/image/house/17.png'},
            {url: ROOT_URL+'/image/house/18.png'},
            {url: ROOT_URL+'/image/house/19.png'},
            {url: ROOT_URL+'/image/house/20.png'},
            {url: ROOT_URL+'/image/house/21.png'},
            {url: ROOT_URL+'/image/house/22.png'},
            {url: ROOT_URL+'/image/house/23.png'},
            {url: ROOT_URL+'/image/house/24.png'},
            {url: ROOT_URL+'/image/house/25.png'},
            {url: ROOT_URL+'/image/house/26.png'},
            {url: ROOT_URL+'/image/house/27.png'},
            {url: ROOT_URL+'/image/house/28.png'},
            {url: ROOT_URL+'/image/house/29.png'},
            {url: ROOT_URL+'/image/house/30.png'},
        ];

        var _len = imgs.length;
        var _step = rect.w / _len;
        var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len));
        var _sp = new C3D.Sprite();
        for (var i = 0; i < _len; i++) {
            var _p = new C3D.Plane();
            var _r = 360 / _len * i;
            var _a = Math.PI * 2 / _len * i;
            _p.size(_step, rect.h).position(Math.sin(_a) * _radius, 0, -Math.cos(_a) * _radius).rotation(0, -_r, 0).material({
                image: imgs[i].url,
                repeat: 'no-repeat',
                bothsides: false
            }).update();
            _sp.addChild(_p);
        }
        return _sp;
    },
    genPlant: function () {
        var that = this;
        var imgs = [
            {url: ROOT_URL+'/image/wheel.png?v=3'},
            {url: ROOT_URL+'/image/wheel.png?v=3'},
            {url: ROOT_URL+'/image/wheel.png?v=3'},
        ];
        var _len = imgs.length;
        var _step = 2000 / _len;
        var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len));
        var _sp = new C3D.Sprite();
        var info = [
            {Act: true, x: .31, y: 140, w: 450, h: 450},
            {Act: true, x: .31, y: 140, w: 450, h: 450},
            {Act: true, x: .31, y: 140, w: 450, h: 450}
        ];
        var ps = [];
        for (var i = 0; i < _len; i++) {
            var _i = info[i];
            var _c = _i.Act;
            var _p = new C3D.Plane();
            var _r = 360 * _i.x;
            var _a = Math.PI * 2 * _i.x;
            _p.size(_i.w, _i.h)
                .position(
                    Math.sin(_a) * _radius,
                    _i.y,
                    -Math.cos(_a) * _radius)
                .rotation(0, -_r, 0)
                .material({
                    image: imgs[i].url,
                    repeat: 'no-repeat',
                    size: '80%',
                    bothsides: false
                })
                .update();
            if (_c) {
                for (var i = 0; i <= 360; i++) {
                    JT.to(_p, 5, {
                        rotationZ: i,
                        repeat: -1,
                        onUpdate: function () {
                            this.target.updateT()
                        }
                    });
                }
            }
            ps.push(_p);
            _sp.addChild(_p);
        }
        return _sp;
    },
    genTitle: function () {
        var that = this;
        var imgs = [
            {url: ROOT_URL+'/image/holder.png'},
            {url: ROOT_URL+'/image/holder.png'},
            {url: ROOT_URL+'/image/holder.png'}
        ];
        var _len = imgs.length;
        var _step = 2000 / _len;
        var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len));
        console.log(_radius,_len,_step,Math.tan(Math.PI / _len))
        var _sp = new C3D.Sprite();
        var info = [
            {x: .31, y: 180, w: 450, h: 450},
            {x: .31, y: 180, w: 450, h: 450},
            {x: .31, y: 180, w: 450, h: 450}
        ];
        var ps = [];
        for (var i = 0; i < _len; i++) {
            var _i = info[i];
            var _c = _i.Act;
            var _p = new C3D.Plane();
            var _r = 360 * _i.x;
            var _a = Math.PI * 2 * _i.x;
            _p.size(_i.w, _i.h)
                .position(
                    Math.sin(_a) * _radius,
                    _i.y,
                    -Math.cos(_a) * _radius)
                .rotation(0, -_r, 0)
                .material({
                    image: imgs[i].url,
                    repeat: 'no-repeat',
                    size: '80%',
                    bothsides: false
                })
                .update();
            ps.push(_p);
            _sp.addChild(_p);
        }
          ps[2].on("touchend", function () {
         if (!that.isDrag) {
         _s.lookDetail(10);
         }
         });
        return _sp;
    },
    genCover: function () {
        var that = this;
        var imgs = [
            {url: ROOT_URL+'/image/kong.png'},
            {url: ROOT_URL+'/image/kong.png'},
            {url: ROOT_URL+'/image/kong.png'},
            {url: ROOT_URL+'/image/kong.png'},
            {url: ROOT_URL+'/image/kong.png'},
            {url: ROOT_URL+'/image/kong.png'},
            {url: ROOT_URL+'/image/kong.png'},
            {url: ROOT_URL+'/image/kong.png'},
            {url: ROOT_URL+'/image/kong.png'},
            {url: ROOT_URL+'/image/kong.png'},
            {url: ROOT_URL+'/image/kong.png'}
        ]
        var _len = imgs.length;
        var _step = 2000 / _len;
        var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len));

        var _sp = new C3D.Sprite();
        var info = [
            {x: .15, y: 28, w: 350, h: 200},//冰室
            {x: .48, y: 252, w: 350, h: 350},//翰林轩
            {x: .70, y: 257, w: 350, h: 350},//极面
            {x: .90, y: 111, w: 350, h: 350},//奶茶
            {x: .25, y: -285, w: 350, h: 350},//石板桥
            {x: .65, y: -164, w: 350, h: 350},//探月
            {x: .85, y: -285, w: 350, h: 350},//龟制面
            {x: .45, y: -130, w: 350, h: 350},//无妈呀
            {x: .10, y: 269, w: 400, h: 250},//优越
            {x: .06, y: -285, w: 350, h: 350},//游香识乐
            {x: .31, y: 220, w: 400, h: 400},//霸王餐
        ];
        var ps = [];
        for (var i = 0; i < _len; i++) {
            var _i = info[i];
            var _c = _i.noAct;
            var _p = new C3D.Plane();
            var _r = 360 * _i.x;
            var _a = Math.PI * 2 * _i.x;
            _p.el.className = 'box';
            _p.size(_i.w, _i.h).position(
                    Math.sin(_a) * _radius,
                _i.y,
                    -Math.cos(_a) * _radius)
                .rotation(0, -_r, 0).material({
                size: '70%',
                image: imgs[i].url,
                repeat: 'no-repeat',
                bothsides: false
            }).update();
            ps.push(_p);
            _sp.addChild(_p);
        }
        ps[0].on("touchend", function () {
            if (!that.isDrag) {
                _s.lookDetail(0)
            }
        });
        ps[1].on("touchend", function () {
            if (!that.isDrag) {
                _s.lookDetail(1)
            }
        });
        ps[2].on("touchend", function () {
            if (!that.isDrag) {
                _s.lookDetail(2)
            }
        });
        ps[3].on("touchend", function () {
            if (!that.isDrag) {
                _s.lookDetail(3)
            }
        });
        ps[4].on("touchend", function () {
            if (!that.isDrag) {
                _s.lookDetail(4)
            }
        });
        ps[5].on("touchend", function () {
            if (!that.isDrag) {
                _s.lookDetail(5)
            }
        });
        ps[6].on("touchend", function () {
            if (!that.isDrag) {
                _s.lookDetail(6)
            }
        });
        ps[7].on("touchend", function () {
            if (!that.isDrag) {
                _s.lookDetail(7)
            }
        });
        ps[8].on("touchend", function () {
            if (!that.isDrag) {
                _s.lookDetail(8)
            }
        });
        ps[9].on("touchend", function () {
            if (!that.isDrag) {
                _s.lookDetail(9)
            }
        });

        return _sp;
    },
    genTwo: function () {
        var that = this;
        var imgs = [
            {url: ROOT_URL+'/image/up.png'},
            {url: ROOT_URL+'/image/down.png'},
        ];
        var _len = imgs.length;
        var _step = 2000 / _len;
        var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len));
        var _sp = new C3D.Sprite();
        var info = [
            {x: 0, y: -550, w: 442, h: 467},
            {x: 0, y: 666, w: 656, h: 694},
        ];
        var ps = [];
        for (var i = 0; i < _len; i++) {
            var _i = info[i];
            var _p = new C3D.Plane();
            var _r = 360 * _i.x;
            var _a = Math.PI * 2 * _i.x;
            if (i == 0) {
                _p.size(_i.w, _i.h)
                    .position(
                        Math.sin(_a) * _radius,
                        _i.y,
                        -Math.cos(_a) * _radius)
                    .rotation(-90, -_r, 0)
                    .material({
                        image: imgs[i].url,
                        repeat: 'no-repeat',
                        size: '90%',
                        bothsides: false,
                    })
                    .update();
            } else if (i == 1) {
                _p.size(_i.w, _i.h)
                    .position(
                        Math.sin(_a) * _radius,
                        _i.y,
                        -Math.cos(_a) * _radius)
                    .rotation(90, -_r, 0)
                    .material({
                        image: imgs[i].url,
                        repeat: 'no-repeat',
                        size: '90%',
                        bothsides: false,
                    })
                    .update();
            }

            ps.push(_p);
            _sp.addChild(_p);
        }
        return _sp;
    },

};
