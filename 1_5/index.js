const myTags1 = document.getElementsByClassName('color-btn');
console.log(myTags1);
console.log(myTags1[1]); // 1. 유사배열 1.1 숫자 형태의 indexing이 가능하다.
console.log(myTags1.length); // 1.2 length 프로퍼티가 있다.
// // 1.3 배열의 기본 메소드를 사용할 수 없다.
// myTags1.push("codeit");
// myTags1.splice("codeit");

// 1.4 Array.isArray(유사배열)은 false다.
console.log("배열인가?",Array.isArray(myTags1)); //false


for (let tag of myTags1) {
	console.log(tag);
}

const myTags2 = document.getElementsByClassName('red');
console.log(myTags2);
console.log(myTags2[0]);
console.log(myTags2[1]); // undefined

const myTags3 = document.getElementsByClassName('white');
console.log(myTags3);
console.log(myTags3 === null);
console.log(myTags3.length);