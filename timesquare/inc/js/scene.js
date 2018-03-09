var Scene = function (page_config, fixType) {
    this.page_config = page_config;
    this.act = new Action(page_config);
    this.render = new Render(this.act, page_config, (fixType === 'fixWidth') ? true : false);

    this.pages = page_config.pages;
    this.page_index = 0;
    this.page_id;
    this.cgIds = [];
    this.toIds = [];
    this.soundIds = [];
    this.world;
    this.count;
    this.num=2;
    this.get = true;
    this.kind;
    this.isAdd = false;
    this.arr = [];
    this.infoArray = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
    this.totalFood = 0;
    this.clickNum = 0;
    this.flag=true;
    this.gameIds =[0,0,0,0,0,0,0,0,0,0,0];
    this.timers;
    this.init();
};

Scene.prototype = {
    init: function () {
        var that = this;
        $("#loader").hide();
        FastClick.attach(document.body);
        $(document).bind('touchmove', function (e) {
            console.log(that.flag)
            if(that.flag){
                e.preventDefault();
            }
        })
        that.playCartoon('music','music',3,200,-1);
        that.music();
        that.showPage('page_index');
        that.initScene1();
        this.world = new World();
        // 微信初始化
        weixin_jssdk_ops.init();
    },
    initGame: function () {
        var that = this;
        that.isAdd = false;
        this.arr = [
           ROOT_URL+'/image/'+that.kind+'/food1.png',
           ROOT_URL+'/image/'+that.kind+'/food2.png',
           ROOT_URL+'/image/'+that.kind+'/food3.png',
           ROOT_URL+'/image/'+that.kind+'/food4.png'
        ]
        var aa = that.kind;
        if(that.gameIds[aa]>=2){
            $('.noticeShare').removeClass('disappear');
            return;
        }else{
            that.showPage('page_game');
            that.setImg('#gameBg',that.kind,'bg.jpg');
            that.setImg('#gameBanner',that.kind,'banner.png');
            $('.foodBox').remove();
            this.infoArray = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
            $('#quantity').html('0');
            $('#countDown').html('20');
            that.clickNum = 0;
            this.countDown();
            this.showFood(20);
        }
        that.gameIds[aa]++;

    },
    myTimeout: function (cbf, delay, tag) {
        var id = setTimeout(cbf, delay);
        this.toIds.push(id);
    },
    myTimeoutClear: function () {
        for (var i = 0; i < this.toIds.length; i++) {
            clearTimeout(this.toIds[i]);
        }
        this.toIds = [];
    },
    initWorld: function () {
        $('#main').addClass('active');
        $('.boxDiv').css('display','block');
        this.world.start();
    },
    countDown: function () {
        var that = this;
        that.count = 20;
        that.timers = setInterval(function () {
            if (that.count < 1) {
                $('#countDown').html(00);
                clearInterval(that.timers);
                that.gameOver();
            } else {
                that.count--;
                if (that.count < 10) {
                    $('#countDown').html('0' + that.count);
                } else {
                    $('#countDown').html(that.count);
                }
            }
        }, 1000);
    },
    showFood: function () {
        var that = this;
        var xOffset = 0;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                var sts = (Math.random() < .4) ? 1 : 0;
                that.infoArray[i][j] = sts;
                xOffset = (i % 2 == 0) ? -10 : 0;
                if (sts == 1) {
                    that.totalFood++;
                    var xx = 5 - Math.random() * 10;
                    var yy = 5 - Math.random() * 10;
                    var index = Math.floor(Math.random() * 4);
                    $('<div class="foodBox" data-loc="' + i + ',' + j + '"></div>').appendTo($('#gameBox')).css({
                        left:20+50 * j + xOffset + xx,
                        top: 20+50 * i + yy,
                        display:'none',
                        backgroundImage: 'url(' + that.arr[index] + ')'
                    }).click(function (e) {
                        that.touchFood(e);
                        $(this).remove();
                    })
                }
            }
        }
        var a = $('.foodBox').length;
        var b = 0;
            setInterval(function(){
                if(b<a){
                    $('.foodBox').eq(b).css('display','block');
                    b++;
                }else{
                    that.isAdd = true;
                }
            },300)

    },
    touchFood: function (e) {
        var that = this;
        var data = $(e.target).data('loc');
        var point = data.split(',');
        that.infoArray[point[0]][point[1]] = 0;
        that.clickNum++;
        $('#quantity').html(that.clickNum);
          var remain = $('.foodBox').length
        // 新增逻辑
        var rnd = (.5 + Math.random() * .5) * (36 -remain) / 36;
        if (rnd > 0.3&&rnd<0.6) {
            that.addNewFood(1);
        } else if (rnd > 0.6) {
            that.addNewFood(2);
        }
        if(that.isAdd){
            if(remain<18){
                var res = 18-remain;
                var c=0;
                setInterval(function(){
                    if(c<res){
                        that.addNewFood(1);
                        c++;
                    }
                },300)
            }
        };

    },
    addNewFood: function (n) {
        var that = this;
        // 增加新的点
        var isAdded = false;
        while (!isAdded) {
            for(var a = 0;a<n;a++){
                var rndX = Math.floor(Math.random() * 6);
                var rndY = Math.floor(Math.random() * 6);
                if (that.infoArray[rndX][rndY] == 0) {
                    that.infoArray[rndX][rndY] = 1;
                    var xx = 5 - Math.random() * 10;
                    var yy = 5 - Math.random() * 10;
                    var index = Math.floor(Math.random() * 4);
                    $('<div class="foodBox" data-loc="' + rndX + ',' + rndY + '"></div>').appendTo($('#gameBox')).css({
                        left: 50 * rndY + xx+20,
                        top: 50 * rndX + yy+20,
                        backgroundImage: 'url(' + that.arr[index] + ')'
                    }).click(function (e) {
                        that.touchFood(e);
                        $(this).remove();
                    })
                }
            }
            isAdded = true;
        }
    },
    gameOver: function () {
        if (this.clickNum > 50) {
            $('.pass').removeClass('disappear');
        } else {
            $('.defeated').removeClass('disappear');
        }
    },
    lookDetail: function (kind) {
        var that = this;
        that.kind=kind+1;
        that.setImg('#card',that.kind,'card.png');
        $('.cardBox').css('display','block');
        that.act.bindEvent('.lookDetail', 'touchstart', function () {
            if(that.kind==11){
                $('.cardBox').css('display','none');
                $('#main').css("left", "2000px");
                $('.boxDiv').css('display','none');
               that.getAway();
            }else{
                $('.cardBox').css('display','none');
                $('#main').css("left", "2000px");
                $('.boxDiv').css('display','none');
                that.showPage('page_start');
                that.setImg('#startTxt',that.kind,'txt.png');
            }
        })
    },
    /*抽奖*/
    getAway: function () {
        var that = this;
        this.get = Math.random();
        if (this.get < 0.5) {
            that.showPage('page_award');
        } else {
            that.showPage('page_noAward');
        }
    },
    initScene1: function () {
        this.playCartoon('mouse', 'mouse', 2, 400, -1);
    },
    myRemove: function (lst) {
        for (var i = 0; i < lst.length; i++) {
            $(lst[i]).remove();
        }
    },
    myHide: function (lst) {
        for (var i = 0; i < lst.length; i++) {
            $(lst[i]).removeClass('disappear');
        }
    },
    playCartoon: function (id, prefix, num, speed, repeatCnt, cbf) {
        var that = this;
        var cbf = cbf;
        var index = 0;
        var cgid = setInterval(function () {
            if (index < num) {
                index++;
                $('#' + id).css('backgroundImage', 'url(' + ROOT_URL + '/image/' + prefix +'/'+ index + '.png)');
            } else {
                index++;
                if (index > num) {
                    if (repeatCnt == -1 || repeatCnt > 0) {
                        if (repeatCnt != -1) repeatCnt--;
                        index = 0;
                    } else {
                        that.stopCartoon();
                        cbf();
                    }
                }
            }
        }, speed);
        that.cgIds.push(cgid);
        //console.log('动画播放' + cgid);
    },
    stopCartoon: function () {
        for (var i = 0; i < this.cgIds.length; i++) {
            clearInterval(this.cgIds[i]);
        }
    },
    initPromotion:function(){
        var that = this;
        that.showPage('page_promotion')
        that.promotion();
    },
    showPage: function (page_id) {
        if (this.isOver) return;
        console.log('场景切换至[' + page_id + ']');
        this.page_id = page_id;
        var page = this.getPage(page_id);
        $('.container').hide();
        $('.layer').remove();
        if (!page.finished) {
            page.waiting = true;
        } else {
            page.isRender = false;
            this.render.renderPage(page);
        }
    },
    getPage: function (page_id) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].id == page_id) {
                return this.pages[i];
            }
        }
        return null;
    },
    /*轮播图*/
    promotion:function(){
        var that = this;
        for(var i = 0;i<that.num;i++){
            $('<div id="noUse" class="proText1">(未使用)</div>' +
                '<div class="proText" id="proText">元优惠券</div>' +
                '<div class="proText" id="price">20</div>' +
                '<div id="codePic"></div>' +
                '<div id="codeNum">11111111111</div>').appendTo( $('<div class="pic"></div>') .appendTo($('#codeBox')));
            $('<div class="dot"></div>').appendTo($('#dotBox'));
        }
        $('.dot').eq(0).css('backgroundColor','#85a45d');
        $('#dotBox').css('left',10*that.num/-2+'px')
        var lock = true;
        if(lock){
            $("#lunbo").swip({
                speed:function(x,y){
                    lock=false;
                    if(x>10){
                        var curleft = parseInt($('#codeBox').css('left'));
                        if(curleft<=that.num*-270+270){
                        }else{
                            $('#codeBox').animate({
                                left:curleft-270+'px'
                            },200,function(){
                             lock=true;
                            })
                            var n = Math.abs(Math.ceil(parseInt($('#codeBox').css('left'))/270))+1;
                            $('.dot').css('backgroundColor','white')
                            $('.dot').eq(n).css('backgroundColor','#85a45d');
                        }
                    }else if(x<-10){
                        var curleft = parseInt($('#codeBox').css('left'));
                        if(curleft>-270){

                        }else{
                            $('#codeBox').animate({
                                left:curleft+270+'px'
                            },200,function(){
                                lock=true;
                            })
                            var m = Math.abs(Math.ceil(parseInt($('#codeBox').css('left'))/270))-1;
                            console.log(m)
                            $('.dot').css('backgroundColor','white')
                            $('.dot').eq(m).css('backgroundColor','#85a45d');
                        }

                    }
                }
            });
        }
    },
    music:function(){
        var that = this;
        var audio = document.getElementById('audio');
        $('#music').click(function(){
            if(audio.paused){//视情况而定
                audio.play();
                that.stopCartoon();
                that.playCartoon('music','music',3,200,-1);
            }else{
                console.log('pause')
                audio.pause();
                 that.stopCartoon();
                $('#music').css('backgroundImage',"url("+ROOT_URL+"/image/music/off.png)");
            }
        })
    },
    setImg: function (selector,num,src) {
        $(selector).css('backgroundImage', 'url(' + ROOT_URL + '/image/'+num+'/'+ src + ')');

    },
};