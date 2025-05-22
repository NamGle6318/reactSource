const arr = ["사과", "포도", "딸기", "망고", "바나나"];

// map(함수) : 함수를 실행한 결과가 새로운 배열로 반환됨
// map(() => {}) 중괄호 추가시 return 반드시 명시해야함. 생략 시 값이 반환되지 않음
const result = arr.map((fruit, idx) => {
  return fruit;
});
console.log(result);
