$(function(){
    $('nav ul li a, .back-to-top a').click(function(e){
        var thisElem = $(this.hash);//$('#intro') this.hash => #intro
        // console.log(thisElem.offset().top);
        $('html,body').stop();
        $('html,body').animate({scrollTop : thisElem.offset().top}, 1500);
        // e.preventDefault();
        return false;

    });
    /*
    실습 :
    scrollTop 값이 0 보다 클때 
    .back-to-top 요소에 on 클래스를 추가하고
    0보다 작거나 같을때는 on 클래스를 삭제하는 
    코드를 아래에 작성하시오.
    // 조건문 ? true일때 실행 : false일때 실행 ;
    */
   $(window).scroll(function(){
        var scTop = $(this).scrollTop();
        var backToTopElem = $('.back-to-top');
        // if( scTop > 0 ){
        //     backToTopElem.addClass('on');
        // }else{
        //     backToTopElem.removeClass('on');
        // }
        scTop > 0 ? backToTopElem.addClass('on') : backToTopElem.removeClass('on');
   });

    /*
            // scroll event change body bg        
        $('.slide').each(function(){// 1001
            var thisOffset = $(this).offset();
            if( thisOffset.top - starPoint <= scTop && scTop < thisOffset.top + wHeight ){                
                $('body').css('background-color', $(this).data('bg'));
            }
        });
        위 코드를 활용하여 윈도우의 scrollTop 값이 각 섹션의 영역에
        도달했을때 해당 섹션에 active 클래스를 추가하는 코드를
        작성하시오.
    */
        $(window).scroll(function(){
            var wHeight = $(this).height();
            var scTop = $(this).scrollTop();
            var starPoint = 150;
            $('section').each(function(i){
                var sectionIndex = i;
                var thisOffset = $(this).offset();
                if( thisOffset.top - starPoint <= scTop && scTop < thisOffset.top + wHeight ){                
                    $(this).addClass('active');
                    $('nav ul li').removeClass('on');// 기존 추가된 on 클래스를 삭제
                    $('nav ul li').each(function(index){
                        if( index == sectionIndex ){
                            $(this).addClass('on');
                        }
                    });

                    $('nav ul li').eq(sectionIndex).addClass('on');
                }
            });
        });



});