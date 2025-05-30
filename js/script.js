// 实时时钟功能
function updateClock() {
    const now = new Date();
    $('#clock').text(now.toLocaleTimeString());
}
setInterval(updateClock, 1000);

// 悬浮缩放特效（已在style.css实现）
// 通过.scale-hover类实现transform:scale效果

// 实时时钟显示
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
    // 添加日期显示
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    document.getElementById('date').textContent = 
        now.toLocaleDateString('zh-CN', options);
}

// 每秒更新一次时钟
setInterval(updateClock, 1000);

// 初始化时钟显示
updateClock();