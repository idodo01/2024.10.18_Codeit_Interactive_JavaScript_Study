const toDoList = document.querySelector('#to-do-list');

function addNewTodo(text) {
  const list = document.createElement('li');
  list.textContent = text;
  toDoList.prepend(list);
}

// 테스트 코드
addNewTodo('자바스크립트 공부하기');
addNewTodo('고양이 화장실 청소하기');
addNewTodo('고양이 장난감 쇼핑하기');