// 콜백지옥 해결
// 1. promise
// 2. async, await

// promise 상태
// 대기(panding)
// 이행(Fulfilled)
// 실패(Reject)
// new Promise();

// new Promise((resolve, reject) => {
//   이행(비동기 처리가 완료되어 프로미스가 값을 반환해준 상태)
//   resolve();

//   실패(비동기 처리 실패)
//   reject(new Error("에러발생"));
// });

function test() {
  const p1 = new Promise((resolve, reject) => {
    console.log("hello");
    setTimeout(() => {
      resolve(console.log("2초 경과"));
    }, 2000);
  })
    .then(() => console.log("Bye"))
    .catch((res) => console.log("error + res"));

  console.log("Hello Again");

  console.log(p1);
}

function getData1(callbackFunc) {
  return new Promise((resolve, reject) => {
    $.get("https://jsonplaceholder.typicode.com/todos/1", function (res) {
      if (res) {
        resolve(res);
      }
      reject(new Error("에러"));

      // callbackFunc(res);
    });
  });
}

// test();
getData1()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
