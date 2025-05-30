// 菜单切换动画
$(document).ready(function() {
  const $menu = $('#porsche-nav');
  const $menuTrigger = $('.menu-toggle');
  
  // 桌面端悬停展开
  if (window.matchMedia("(min-width: 1024px)").matches) {
    $menuTrigger.hover(
      function() {
        $menu.stop(true).slideDown(300, 'easeOutQuad');
      },
      function() {
        $menu.stop(true).delay(200).slideUp(300);
      }
    );
  }
  
  // 移动端点击展开
  $menuTrigger.on('click', function() {
    $menu.stop(true).slideToggle(400, function() {
      $(this).toggleClass('active').css('display', '');
    });
  });

  // 视口尺寸变化监听
  let resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 1024) {
        $menu.css('display', 'flex').removeClass('active');
      } else {
        $menu.css('display', 'none').removeClass('active');
      }
    }, 250);
  });
});