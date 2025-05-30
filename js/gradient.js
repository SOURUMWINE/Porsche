function updateGradient() {
    const scrollPos = $(window).scrollTop();
    const gradientEnd = Math.min(100 + scrollPos * 0.2, 150);
    
    $('body').css('background', 
        `linear-gradient(${scrollPos % 360}deg, 
        var(--main-color) 0%, 
        var(--secondary-color) ${gradientEnd}%)`);
}

$(window).scroll(() => requestAnimationFrame(updateGradient));