/**
 * Created by Administrator on 2017/4/12 0012.
 */
FastClick.attach(document.body);


;(function (desW) {
    var winW=document.documentElement.clientWidth,
        ratio=winW/desW;
    document.documentElement.style.fontSize=ratio*100+'px';
})(640);

//swiper
var mySwiper=new Swiper('.swiper-container',{
    /*setting 配置参数*/
    direction:'vertical',//垂直  默认水平
    loop:true,
    onTransitionEnd:function(swiper){
        var curIndex=swiper.activeIndex;
        var slideAry=swiper.slides;
        var targetId='page';
        switch(curIndex){
            case 0:
                targetId+=slideAry.length-2;
                break;
            case slideAry.length-1:
                targetId+=1;
                break;
            default:
                targetId+=curIndex;
        }
        [].forEach.call(slideAry,function (item, index) {
            if(curIndex==index){
                item.id=targetId;
            }else{
                item.id=null;
            }
        });
    }
});

//music
var musicBox=document.querySelector('#musicBox'),
    musicAudio=document.querySelector('#musicAudio');

window.setTimeout(function () {
    musicAudio.play();
    musicBox.style.opacity=1;
    musicAudio.addEventListener('canplay',function () {
        musicBox.classList.add('musicMove');
    });
},1000);
musicBox.addEventListener('click',function () {
    if(musicAudio.paused){
        musicAudio.play();
        musicBox.classList.add('musicMove');
    }else{
        musicAudio.pause();
        musicBox.classList.remove('musicMove');
    }
});