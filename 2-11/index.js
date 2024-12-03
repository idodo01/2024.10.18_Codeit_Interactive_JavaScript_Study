const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML; 

// outerHTML은 한 번 사용하면, 다른 요소가 되어버리기 때문에
// 아래와 같은 방식이 아닌
// today.outerHTML =  today.outerHTML + '<p>다음11</p>';  

// 새로 호출하는 방식을 사용해야한다
const today = document.querySelector('#today');
today.outerHTML = newToday.outerHTML + '<p>다음22</p>';

/////////////////////////////////////////////////////////////////////
// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first); // prepend : 메서드를 호출한 제일 첫번째 노드로 

////////////////////////////////////////////
const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);  // append : 메서드를 호출한 제일 마지막 노드로 

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev); // before : 형제 노드로 앞에

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next); // after : 형제 노드로 뒤에