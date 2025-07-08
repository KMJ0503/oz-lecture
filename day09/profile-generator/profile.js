//변수 선언: var, let, const를 각각 사용

//var 사용
var userName = "김민준"; //string

//let 사용
let userAge = 30; //number

//const 사용
const isStudent = false; //boolean

let userDream = null; // null
let userHobbyCount; // undefined
const uniqueID = Symbol("user-id"); // Symbol
const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

//프로필 문장
let profileSummary = "안녕하세요! 제 이름은 " + userName + "이고,\n";
profileSummary += "\t" + userAge + "대 입니다. ";
profileSummary += "현재 " + (isStudent ? "학생" : "직장인") + "입니다.\n";
profileSummary += "저의 꿈은 " + userDream + "입니다.";
//문자열 처리: 이스케이프 문자(\n, \t)를 사용하여 프로필 정보에 줄바꿈 또는 탭 포함

console.log("--- 개인 프로필 문장 ---");
console.log(profileSummary);

//배열 리터럴: 배열을 선언하여 최소 3개의 취미(hobbies)를 저장
const userHobbies = ["독서", "코딩", "운동"];
let hobbiesString =
  "저의 취미는: " +
  userHobbies[0] +
  ", " +
  userHobbies[1] +
  ", " +
  userHobbies[2] +
  " 입니다.";

console.log(hobbiesString);

// 객체 리터럴: 객체를 선언하여 개인 정보 저장
const userInfo = {
  name: userName,
  age: userAge,
  isStudent: isStudent,
  city: "서울",
  job: "1인 창업자",
};

// 객체 속성을 활용한 프로필 문장
let userDetail = `저는 ${userInfo.city}에 거주하는 ${userInfo.job}입니다.`;

console.log("\n--- 객체 속성을 활용한 프로필 문장 ---");
console.log(userDetail);

//typeof: 변수(배열, 객체 포함)에 대해 typeof를 사용하여 데이터 타입 출력
console.log("\n--- 데이터 타입 확인 (typeof) ---");
console.log(`userName 변수의 타입: ${typeof userName}`); // string
console.log(`userAge 변수의 타입: ${typeof userAge}`); // number
console.log(`isStudent 변수의 타입: ${typeof isStudent}`); // boolean
console.log(`userHobbies 변수의 타입: ${typeof userHobbies}`); // object
console.log(`userInfo 변수의 타입: ${typeof userInfo}`); // object
console.log(`userDream 변수의 타입: ${typeof userDream}`); // object
console.log(`userHobbyCount 변수의 타입: ${typeof userHobbyCount}`); // undefined
console.log(`uniqueID 변수의 타입: ${typeof uniqueID}`); // symbol
console.log(`bigNumber 변수의 타입: ${typeof bigNumber}`); // bigint
