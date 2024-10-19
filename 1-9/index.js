// css 선택자로 태그 선택하기
const myTag = document.querySelector('.color-btn'); 
console.log(myTag); // .color-btn 중 가장 첫번째 값 하나만 가져옴

// 둘다 유사배열로 담기는데
// querySelectorAll은 NodeList(8)로
const myTags1 = document.querySelectorAll('.color-btn');
console.log(myTags1);
// getElementsByClassName은 HTMLCollection(8)로 담긴다
const myTags2 = document.getElementsByClassName('color-btn');
console.log(myTags2);