const clock = document.querySelector("#clock")

getClock = () => {
    // Date object : 현재 일시 호출 가능
    const date = new Date();
    // 숫자인 date.get____을 String으로 감싸서 문자열로 만들기
    // padStart(자리수,공란채울 텍스트)
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // clock 위치에 텍스트로 넣어주기
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 시계 즉시호출
getClock();

// 1초마다 재호출
setInterval(getClock, 1000);