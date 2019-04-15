$(document).ready(function(){

    /* scrolling on navigation bar ===========================*/
    $(function(){
        // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
                });
            }
            }
        });
    });
    $('.section-about').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px;'
    });

    /* MOBILE NAVIGATION ================ */
    $('.js--nav-icon').click(function(){
        let nav = $('.js--main-nav');
        let icon = $('.js--nav-icon i');
        nav.toggle(200);
        if(icon.hasClass('fa-bars')){
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        }else{
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });

    /*****************  Animations *************/
    $('.navigation').waypoint(function(){
        $('.navigation').addClass('animated bounceInDown');
    },{
        offset: '50%;'
    });
    $('.heading-box--animated').waypoint(function(){
        $('.heading-box--animated').addClass('animated pulse');
    },{
        offset: '50%;'
    });
    $('.btn-start__animated').waypoint(function(){
        $('.btn__animated').addClass('animated pulse');
    },{
        offset: '90%;'
    });
    $('#about--animate-1').waypoint(function(){
        $('#about--animate-1').addClass('animated bounceInLeft');
    },{
        offset: '70%;'
    });
    $('#about--animate-2').waypoint(function(){
        $('#about--animate-2').addClass('animated bounceInRight');
    },{
        offset: '70%;'
    });
    $('#faculty').waypoint(function(){
        $('#faculty').addClass('animated pulse');
    },{
        offset: '50%;'
    });
    /***************** GOOGLE MAP *******************/
    let map = new GMaps({
        div: '.map',
        lat: 21.9236578,
        lng: 95.9545038,
        zoom: 15
    });
    map.addMarker({
        lat: 21.9236578,
        lng: 95.9545038,
        title: 'University of Technology(Sagaing)',
        infoWindow: {
            content: 'University of Technology(Sagaing)'
        }
    });
      
});

// POPUP LOGIN
$('.navigation__login').click(function(){
    $('.popup').css({'opacity':'1','visibility':'visible'});
});
$('.form__close').click(function(){
    $('.popup').css({'opacity':'0','visibility':'hidden'});
});