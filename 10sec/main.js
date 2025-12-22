document.addEventListener('DOMContentLoaded', () => {

    // DOM要素の取得
    const display = document.getElementById('display');
    const startStopButton = document.getElementById('startStopButton');
    const resetButton = document.getElementById('resetButton');
    const resultDiv = document.getElementById('result');

    // 念のためチェック
    if (!display || !startStopButton || !resetButton || !resultDiv) {
        console.error('DOM取得失敗');
        return;
    }

    let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;

    function formatTime(ms) {
        return (ms / 1000).toFixed(3);
    }

    function updateTime() {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }

    startStopButton.addEventListener('click', () => {
        if (isRunning) {
            // STOP
            clearInterval(timer);
            isRunning = false;
            startStopButton.textContent = 'スタート';
            resetButton.disabled = false;

            const finalTime = elapsedTime / 1000;
            const targetTime = 10.000;
            const difference = Math.abs(finalTime - targetTime);

            resultDiv.innerHTML = `
                <p><strong>最終タイム: ${finalTime.toFixed(3)} 秒</strong></p>
                <p>10秒との差: ${difference.toFixed(3)} 秒</p>
            `;

            if (difference < 0.010) {
                resultDiv.innerHTML += '<p style="color:red;">✨ 素晴らしい！神業達成！ ✨</p>';
            } else if (difference < 0.100) {
                resultDiv.innerHTML += '<p style="color:blue;">🎉 惜しい！あと一歩！ 🎉</p>';
            }

        } else {
            // START
            startTime = Date.now() - elapsedTime;
            timer = setInterval(updateTime, 10);
            isRunning = true;
            startStopButton.textContent = 'ストップ';
            resetButton.disabled = true;
            resultDiv.textContent = '';
        }
    });

    resetButton.addEventListener('click', () => {
        clearInterval(timer);
        elapsedTime = 0;
        display.textContent = '0.000';
        isRunning = false;
        startStopButton.textContent = 'スタート';
        resetButton.disabled = true;
        resultDiv.textContent = '';
    });

});
