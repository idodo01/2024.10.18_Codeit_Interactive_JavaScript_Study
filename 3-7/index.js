// 이벤트 버블링 (Event Bubbling)
const content = document.querySelector('#content');
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const items = document.querySelectorAll('.item');

content.addEventListener('click', function(e) {
  console.log('content Event');
  console.log("(현재 타겟) 이벤트 핸들러가 등록된 요소");
  console.log(e.currentTarget); // 현재 타겟: 이벤트 핸들러가 등록된 요소 
  console.log("(타겟) 이벤트가 발생한 요소: ");
  console.log(e.target); // 타겟: 이벤트가 발생한 요소
  console.log("========================="); 
});

title.addEventListener('click', function(e) {
  console.log('title Event');
  console.log("(현재 타겟) 이벤트 핸들러가 등록된 요소");
  console.log(e.currentTarget); // 현재 타겟: 이벤트 핸들러가 등록된 요소 
  console.log("(타겟) 이벤트가 발생한 요소: ");
  console.log(e.target); // 타겟: 이벤트가 발생한 요소
  console.log("========================="); 
});

list.addEventListener('click', function(e) {
  console.log('list Event');
  console.log("(현재 타겟) 이벤트 핸들러가 등록된 요소");
  console.log(e.currentTarget); // 현재 타겟: 이벤트 핸들러가 등록된 요소 
  console.log("(타겟) 이벤트가 발생한 요소: ");
  console.log(e.target); // 타겟: 이벤트가 발생한 요소
  console.log("========================="); 
});

for (let item of items) {
  item.addEventListener('click', function(e) {
    console.log('item Event');
    console.log("(현재 타겟) 이벤트 핸들러가 등록된 요소");
    console.log(e.currentTarget); // 현재 타겟: 이벤트 핸들러가 등록된 요소 
    console.log("(타겟) 이벤트가 발생한 요소: ");
    console.log(e.target); // 타겟: 이벤트가 발생한 요소
    console.log("========================="); 
    
		e.stopPropagation(); // 이벤트 버블링을 막아줌
  });
}
