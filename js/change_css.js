$(function(){
    var stickyHeaderTop = $('#stickytypeheader').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('#graphic').css({visibility: 'visible'});
            $('.fixed').css({position: 'fixed', top: '10px'});
            // $('#sticky').css('display', 'block');
        } else {
            $('#graphic').css({visibility: 'hidden'});
            $('.fixed').css({position: 'fixed', top: '10px'});
            // $('#sticky').css('display', 'none');
        }
    });
});