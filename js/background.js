// 파일명과 동일한 이름으로 적어주기
const images = [ "0.jpg", "1.jpg", "2.jpg" ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 자바스크립트에서 html요소 만들기
const bgImage = document.createElement("img");

// 생성 요소 속성 설정
bgImage.src = `./img/${chosenImage}`;

// 생성 요소 위치 설정
  /*
    append : 맨아래
    prepend : 맨위
  */
document.body.appendChild(bgImage);