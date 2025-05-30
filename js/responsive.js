$(window).on('resize load', function() {
    const viewportWidth = $(window).width();
    
    // 动态调整3D效果强度
    if (viewportWidth < 768) {
        $('.three-d-animation').css('perspective', '500px');
    } else {
        $('.three-d-animation').css('perspective', '1000px');
    }
    
    // 移动端导航切换
    if (viewportWidth < 480) {
        $('.menu li').click(function() {
            $(this).toggleClass('mobile-expand');
        });
    }
});