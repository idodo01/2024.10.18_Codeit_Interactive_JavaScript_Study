// DOM 트리 여행하기
const myTag = document.querySelector('#list-1');

console.log("myTag: ",myTag);

// 형제 요소 노드
console.log("이전 형제: ",myTag.previousElementSibling);
console.log("다음 형제: ",myTag.nextElementSibling);

// 부모 요소 노드
console.log("부모: ",myTag.parentElement);

// 자식 요소 노드
console.log("인덱스 1 자식: ",myTag.children[1]);
console.log("첫번째 자식: ",myTag.firstElementChild);
console.log("마지막 자식: ",myTag.lastElementChild);