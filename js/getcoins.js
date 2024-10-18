const coinOptions = document.querySelectorAll('.coin-option');
const buyButton = document.getElementById('buyButton');
const customOption = document.getElementById('custom-option');
const closeModal = document.querySelector('.close');
const customAmountInput = document.getElementById('customAmount');

coinOptions.forEach(option => {
    option.addEventListener('click', function () {
        if (this.id !== 'custom-option') {
            coinOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            const price = this.dataset.price;
            buyButton.textContent = `$ ${price}`;
        }
    });
});

function goLogin() {
    window.location.href = '../index.html';
}

buyButton.addEventListener('click', function () {
    alert('Purchase initiated!');
});

function showPop() {
    $('#pop').css('display', 'block');
    $('.show-box').css({
        'bottom': '0',
        'transition': 'all .1s ease-in'
    })
}

function hidePop() {
    $('#pop').css('display', 'none');
    $('.show-box').css({
        'bottom': '-60vh',
        'transition': 'all .1s ease-in'
    })
    $('.load-box').css({
        'display': 'none'
    });
    clearInterval(timer); // 停止倒计时
    totalTime = 5 * 60 - 1; // 重置倒计时时间

    $('.success-box').css('display', 'none');
}


// 输入金额

const coinInput = document.getElementById('coinInput');
const totalAmount = document.getElementById('totalAmount');
const rechargeButton = document.getElementById('rechargeButton');
const keys = document.querySelectorAll('.key');

function updateInput() {
    let value = coinInput.value.replace(/,/g, '');
    let numValue = parseInt(value) || 0;

    // 校验值是否在 30 到 2,500,000 范围内
    if (numValue < 0 && numValue !== 0) {
        numValue = 0;
    } else if (numValue > 2500000) {
        numValue = 2500000;
    }

    // 更新输入框和总金额显示
    coinInput.value = numValue.toLocaleString();
    totalAmount.textContent = `¥${numValue.toLocaleString()}`;

    // 禁用或启用充值按钮
    rechargeButton.disabled = numValue === 0;
}

keys.forEach(key => {
    key.addEventListener('click', function () {
        let currentValue = coinInput.value.replace(/,/g, '');

        // 判断是否点击了回退按钮
        if (this.classList.contains('backspace')) {
            currentValue = currentValue.slice(0, -1);
        } else {
            const keyValue = this.textContent;

            // 判断是否点击了 "000" 按钮
            if (keyValue === '000') {
                currentValue += '000';
            } else {
                currentValue += keyValue;
            }
        }

        // 防止无效输入
        coinInput.value = currentValue || '0';
        updateInput();
    });
});

let totalTime = 5 * 60 - 1;
let timer; // 定义全局变量来存储计时器

function startCountdown() {
    const timeDisplay = document.getElementById("timeLeft");

    timer = setInterval(function () {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        // 格式化时间为 MM:SS 的形式
        timeDisplay.textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (totalTime === 0) {
            clearInterval(timer);
            alert("Error: Payment timed out!");
        }

        totalTime--;
    }, 1000); // 每秒更新一次
}


rechargeButton.addEventListener('click', function () {
    if (coinInput.value !== '') {
        let coinsNum = document.querySelector('#coinsNum');
        $('#pop').css('display', 'block');
        $('.show-box').css({
            'bottom': '-60vh',
            'transition': 'all .1s ease-in'
        });
        $('.load-box').css({
            'display': 'flex'
        });
        //启动倒计时
        startCountdown();
        setTimeout(function () {
            $('.load-box').css({
                'display': 'none'
            });
            coinsNum.textContent = coinInput.value;

            $('.success-box').css('display', 'flex');

            setTimeout(() => {
                coinInput.value = '';
            }, 10);
        }, 3000);
    }
});

// 阻止键盘输入
coinInput.addEventListener('keydown', function (e) {
    e.preventDefault();
});

// 初始化输入框
updateInput();

