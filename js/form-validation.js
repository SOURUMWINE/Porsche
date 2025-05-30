$(document).ready(function() {
    $('form').submit(function(event) {
        const email = $('#email').val();
        const tel = $('#number').val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telRegex = /^1[3-9]\d{9}$/;

        if (!emailRegex.test(email)) {
            alert('请输入有效的邮箱地址');
            event.preventDefault();
            return;
        }

        if (!telRegex.test(tel)) {
            alert('请输入有效的手机号码');
            event.preventDefault();
            return;
        }
    });
});

// 实时校验功能
$('#email, #number').on('input', function() {
    const field = $(this);
    const value = field.val();
    let isValid = true;

    if(field.attr('id') === 'email') {
        isValid = emailRegex.test(value);
    } else if(field.attr('id') === 'number') {
        isValid = telRegex.test(value);
    }

    field.toggleClass('invalid', !isValid);
    field.next('.error-message').toggle(!isValid);
});

// 动态错误提示
$('form').prepend('<div class="error-message" style="display:none;color:red;"></div>');