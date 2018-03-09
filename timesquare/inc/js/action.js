var Action = function () {

    this.currentTarget;
    this.rePage;

};

Action.prototype = {
    bindEvent: function (obj, type, func) {
        var objEvt = $._data($(obj)[0], "events");
        if (objEvt && objEvt[type]) {
            //console.log('binded');
        } else {
            //console.log('no event,then bind')
            $(obj).on(type, {}, func);
        }
    },
    "openDialog": function (target) {
        this.currentTarget = target;
        $('.' + target).removeClass('disappear')
    },
    "closeDialog": function () {
        var target = this.currentTarget;
        $('.' + target).addClass('disappear');
        this.currentTarget = null;
    },
    'start': function () {
        $('.remind').css('left','0px');
        $('.boxDiv').css('display','block');
        _s.initWorld();
        setTimeout(function(){
            $('.remind').css('left','-2000px');
        },3000)
    },
    //试试手气
    'try': function () {
        _s.getAway();
    },
    //再试一次
    'again': function () {
        var a1 = _s.kind;
        if(_s.gameIds[a1]<2){
            $('.defeated').addClass('disappear');
        }
        _s.initGame();
    },
    //看看其他店铺
    'look': function () {
        $('#main').css('left', '0px');
        $('.boxDiv').css('display','block');
    },
    //我要挑战
    'challenge': function () {
        var a1 = _s.kind;
        if(_s.gameIds[a1]>=2){
            $('.noticeShare').removeClass('disappear');
            return;
        }/*else if(_s.gameIds[a1]>=3){
            $('.noticeNo').removeClass('disappear');
        }*/else{
            _s.showPage('page_play');
            _s.setImg('#play',_s.kind,'play.jpg');
        }


    },
    //活动规则
    'gameRules': function () {
        _s.flag = false;
        _s.showPage('page_rules');
    },
    /*关闭*/
    'closeStart': function () {
        $('#main').css("left", "0px");
        $('.boxDiv').css('display','block');
    },
    /*我的优惠券*/
    'myList': function (index) {
        console.log(index)
        this.rePage = index;
        _s.initPromotion();
    },
    'play': function () {

        _s.initGame();

    },
    'rulesReturn': function () {
        _s.flag = true;
        _s.showPage('page_start');
    },
    'proReturn': function () {
        switch (this.rePage) {
            case 1:
                _s.showPage('page_start');
                break;
            case 2:
                _s.showPage('page_award');
                break;
            case 3:
                _s.showPage('page_noAward');
                break;
        }
    },
    'share': function () {
        this.openDialog('pop');
        _s.playCartoon('flower','cg1','50',50,-1)
        $('#music').addClass('disappear');
    },
    'pop':function(){
        this.closeDialog('pop');
        $('#music').removeClass('disappear');
    },
    'closeShare':function(){
        $('.noticeShare').addClass('disappear');
    },
    'closeNo':function(){
        $('.noticeNo').addClass('disappear');
    },
    'closeNoPro':function(){
        $('.noPromotion').addClass('disappear');
    }
}