const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }

  input.value = '';
}

send.addEventListener('click', sendMyText);

// 엔터를 했을 때도 화면에 메시지 출력할 수 있도록
function sendMyTextByEnter (e) {
  if (e.key === 'Enter' && !e.shiftKey) { // shift와 함께 누르면 줄이 바뀌도록 작동함
    sendMyText();
    e.preventDefault();
  }
}

input.addEventListener('keypress', sendMyTextByEnter);