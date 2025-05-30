$(document).ready(function() {
    // 初始化3D透视容器
    $('.carousel-container').addClass('three-d-animation');
    
    // 核心变量声明
    const $slides = $('.carousel-slide');
    const $prevBtn = $('.prev-btn');
    const $nextBtn = $('.next-btn');
    let currentIndex = 0;
    const slideInterval = 5000;
    let autoSlideTimer;

    // 3D翻转动画核心方法
    function performSlide(direction) {
        const $current = $slides.eq(currentIndex);
        const newIndex = direction === 'next' 
            ? (currentIndex + 1) % $slides.length
            : (currentIndex - 1 + $slides.length) % $slides.length;
        const $next = $slides.eq(newIndex);

        // 3D动画参数设置
        $current.css({
            'transform': `rotateY(${direction === 'next' ? -90 : 90}deg)`,
            'opacity': 1
        });
        
        $next.css({
            'display': 'block',
            'transform': `rotateY(${direction === 'next' ? 90 : -90}deg)`,
            'opacity': 0
        });

        // 动画执行
        $current.animate({ opacity: 0 }, 500);
        $next.animate({ opacity: 1 }, 500, () => {
            $current.hide().css('transform', '');
            currentIndex = newIndex;
        });
    }

    // 自动轮播控制
    function startAutoSlide() {
        autoSlideTimer = setInterval(() => {
            performSlide('next');
        }, slideInterval);
    }

    // 手动控制绑定
    $nextBtn.click(() => {
        clearInterval(autoSlideTimer);
        performSlide('next');
        startAutoSlide();
    });

    $prevBtn.click(() => {
        clearInterval(autoSlideTimer);
        performSlide('prev');
        startAutoSlide();
    });

    // 初始化轮播
    $slides.hide().first().show();
    startAutoSlide();
});