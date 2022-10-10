const clock = document.querySelector("#clock")

getClock = () => {
    const date = new Date();
    // padStart(자리수,공란채울 텍스트)
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 시계 즉시호출
getClock();

// 1초마다 재호출
setInterval(getClock, 1000);