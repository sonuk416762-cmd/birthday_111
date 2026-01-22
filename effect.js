const TIMING = {
    fadeSpeed: 'fast',
    buttonDelay: 1200,
    balloonAnimation: 2000,
    messageDelay: 500,
    messageFadeIn: 600,
    messageFadeOut: 300,
    textDisplayTime: 1000
};

let scrollPosition = 0;

function lockScroll() {
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

function unlockScroll() {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}

$(window).load(function(){
    $('.loading').fadeOut(TIMING.fadeSpeed);
    $('.container').fadeIn(TIMING.fadeSpeed);
});

$('document').ready(function(){
    var vw;
    $(window).resize(function(){
         vw = $(window).width() / 2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b11').animate({top:240, left: vw-350},TIMING.balloonAnimation);
        $('#b22').animate({top:240, left: vw-250},TIMING.balloonAnimation);
        $('#b33').animate({top:240, left: vw-150},TIMING.balloonAnimation);
        $('#b44').animate({top:240, left: vw-50},TIMING.balloonAnimation);
        $('#b55').animate({top:240, left: vw+50},TIMING.balloonAnimation);
        $('#b66').animate({top:240, left: vw+150},TIMING.balloonAnimation);
        $('#b77').animate({top:240, left: vw+250},TIMING.balloonAnimation);
    });

    $('#turn_on').click(function(){
        lockScroll();
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut(TIMING.fadeSpeed).delay(TIMING.buttonDelay).promise().done(function(){
            $('#play').fadeIn(TIMING.fadeSpeed);
        });
    });

    $('#play').click(function(){
        var audio = $('.song')[0];
        if(audio) {
            audio.play();
        }
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('background-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut(TIMING.fadeSpeed).delay(TIMING.buttonDelay).promise().done(function(){
            $('#bannar_coming').fadeIn(TIMING.fadeSpeed);
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut(TIMING.fadeSpeed).delay(TIMING.buttonDelay).promise().done(function(){
            $('#balloons_flying').fadeIn(TIMING.fadeSpeed);
        });
    });

    function loopOne() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b1').animate({left:randleft,bottom:randtop},2000,function(){
            loopOne();
        });
    }
    function loopTwo() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b2').animate({left:randleft,bottom:randtop},2000,function(){
            loopTwo();
        });
    }
    function loopThree() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b3').animate({left:randleft,bottom:randtop},2000,function(){
            loopThree();
        });
    }
    function loopFour() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b4').animate({left:randleft,bottom:randtop},2000,function(){
            loopFour();
        });
    }
    function loopFive() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b5').animate({left:randleft,bottom:randtop},2000,function(){
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b6').animate({left:randleft,bottom:randtop},2000,function(){
            loopSix();
        });
    }
    function loopSeven() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b7').animate({left:randleft,bottom:randtop},2000,function(){
            loopSeven();
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},3000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
        
        $(this).fadeOut(TIMING.fadeSpeed).delay(TIMING.buttonDelay).promise().done(function(){
            $('#cake_fadein').fadeIn(TIMING.fadeSpeed);
        });
    });

    $('#cake_fadein').click(function(){
        $('#cake_image_container').fadeIn(TIMING.fadeSpeed);
        $(this).fadeOut(TIMING.fadeSpeed).delay(TIMING.buttonDelay).promise().done(function(){
            $('#wish_message').fadeIn(TIMING.fadeSpeed);
        });
    });

    $('#light_candle').click(function(){
        $('canvas').fadeIn(TIMING.fadeSpeed);
        $(this).fadeOut(TIMING.fadeSpeed).delay(TIMING.buttonDelay).promise().done(function(){
            $('#wish_message').fadeIn(TIMING.fadeSpeed);
        });
    });

    $('#wish_message').click(function(){
        vw = $(window).width() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22');
        $('#b3').attr('id','b33');
        $('#b4').attr('id','b44');
        $('#b5').attr('id','b55');
        $('#b6').attr('id','b66');
        $('#b7').attr('id','b77');
        
        $('#b11').animate({top:240, left: vw-350},TIMING.balloonAnimation);
        $('#b22').animate({top:240, left: vw-250},TIMING.balloonAnimation);
        $('#b33').animate({top:240, left: vw-150},TIMING.balloonAnimation);
        $('#b44').animate({top:240, left: vw-50},TIMING.balloonAnimation);
        $('#b55').animate({top:240, left: vw+50},TIMING.balloonAnimation);
        $('#b66').animate({top:240, left: vw+150},TIMING.balloonAnimation);
        $('#b77').animate({top:240, left: vw+250},TIMING.balloonAnimation);
        
        // Move cake image downward
        $('#cake_image_container').animate({
            top: '80%'
        }, TIMING.balloonAnimation);
        
        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(1000);
        
        $(this).fadeOut(TIMING.fadeSpeed).delay(TIMING.buttonDelay).promise().done(function(){
            $('#story').fadeIn(TIMING.fadeSpeed);
        });
    });
    
    $('#story').click(function(){
        $(this).fadeOut(TIMING.fadeSpeed);
        $('#cake_image_container').fadeOut(TIMING.fadeSpeed);
        $('.cake').fadeOut(TIMING.fadeSpeed).promise().done(function(){
            $('.message').fadeIn(TIMING.fadeSpeed);
            lockScroll();
        });
        
        var i;

        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut(TIMING.messageFadeOut).delay(TIMING.messageDelay).promise().done(function(){
                i=i+1;
                $("p:nth-child("+i+")").fadeIn(TIMING.messageFadeIn).delay(TIMING.textDisplayTime);
                
                window.scrollTo(0, scrollPosition);
                
                if(i==50){
                    $("p:nth-child(49)").fadeOut(TIMING.fadeSpeed).promise().done(function () {
                        $('.cake').fadeIn(TIMING.fadeSpeed);
                        unlockScroll();
                    });
                    
                }
                else{
                    msgLoop(i);
                }
            });
        }
        
        msgLoop(0);
    });
});