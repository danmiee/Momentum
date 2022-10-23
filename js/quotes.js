const quotes = [
{
  quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
  author: "- 엘버트 허버드 -"
},
{
  quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
  author: "- 엘사 맥스웰 -"
},
{
  quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
  author: "- 단테 -"
},
{
  quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다",
  author: "- 헨리 포드 -"
},
{
  quote: "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다",
  author: "- 오손 웰스 -"
},
{
  quote: "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
  author: "- 헨리포드 -"
},
{
  quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다",
  author: "- 하버트 개서 -"
},
{
  quote: "늘 하던 대로 하면 늘 얻던 것을 얻는다",
  author: "- unknown -"
},
{
  quote: "성공한 사업가들은 긍정적인 에너지를 주는 사람들이지 가져가는 사람들이 아니다",
  author: "- unknown -"
},
{
  quote: "성공은 매일 반복한 작은 노력들의 합이다",
  author: "- 로버트 콜리어 -"
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// // 0~1 사이 랜덤수
// console.log(Math.random());
// // 반올림
// console.log(Math.round());
// // 올림
// console.log(Math.ceil());
// // 내림
// console.log(Math.floor());

/*
  배열의 인덱스는 0부터 시작하기 때문에
  크기만큼 곱하고 소수점 이하를 버리면 원하는 정수를 얻을 수 있음
*/
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
