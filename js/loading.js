$(document).ready(function() {
    function simulateDownload() {
        let progress = 0;
        const $progressBar = $('.progress-bar');
        const interval = setInterval(() => {
            progress += Math.random() * 5;
            $progressBar.css('width', progress + '%');
            if(progress >= 100) {
                clearInterval(interval);
                $progressBar.addClass('complete');
            }
        }, 300);
    }
    
    $('.download-btn').click(simulateDownload);
});