const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const version = document.querySelector('input[name="option"]:checked').value;

    if (password === '131419') {
        if (version === 'version1' || version === null) {
            window.location.href = './pages/getcoins.html';
        } else if (version === 'version2'){
            window.location.href = './pages/getcoins2.html';
        } else if (version === 'vcoins'){
            window.location.href = 'https://jongaha.github.io/vBucks/';
        } else if (version === 'paypal'){
            window.location.href = 'https://jongaha.github.io/Paypals/';
        }
    } else {
        alert('Wrong password. Please try again.');
    }
});