const clock = document.querySelector("#clock")

getClock = () => {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// 시계 즉시호출
getClock();

// 1초마다 재호출
setInterval(getClock, 1000);