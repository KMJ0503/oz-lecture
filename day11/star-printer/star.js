//변수 선언
const MAX_STARS = 10; // 최대 별 개수 제한
const MIN_STARS = 1; // 최소 별 개수 제한
let userInput; // 사용자 입력 값을 저장할 변수
var isValidInput = false; // 입력 유효성 검사 플래그

//함수 선언문: 기본 별 출력 함수
function printStars(count = 1) {
  let stars = "";
  const actualCount = count > MAX_STARS ? MAX_STARS : count;

  for (let i = 0; i < actualCount; i++) {
    stars += "*";
  }
  console.log(`[입력 : ${userInput}]`, stars);
}

// 반복문 및 유효성 검사 (기본 과제)
while (!isValidInput) {
  userInput = prompt(
    `출력할 별 갯수를 입력하세요. (${MIN_STARS}-${MAX_STARS}):`
  );
  let numStars = Number(userInput);

  if (!isNaN(numStars) && numStars >= MIN_STARS && numStars <= MAX_STARS) {
    console.log("\n--- 기본 별 패턴 ---");
    printStars(numStars);
    isValidInput = true;
  } else {
    console.log(
      `[입력 : ${userInput}]`,
      "Invalid input! Enter a number between 1 and 10."
    );
  }

  if (isValidInput) {
  }
}

// --- 도전 과제 시작 ---

console.log("\n--- 도전 과제 시작 ---");

//다양한 함수 정의: 함수 표현식 (역순 별 출력)
const printReverseStars = function (count) {
  console.log("\n--- 역순 별 패턴 ---");
  const actualCount = count >= MIN_STARS && count <= MAX_STARS ? count : 5;

  for (let i = actualCount; i >= MIN_STARS; i--) {
    let stars = "";
    for (let j = 0; j < i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
};

//다양한 함수 정의: 화살표 함수 (사각형 패턴 출력)
const printSquare = (count) => {
  console.log("\n--- 사각형 패턴 ---");
  const actualCount = count >= MIN_STARS && count <= MAX_STARS ? count : 3;
  // 유효하지 않으면 기본 3x3으로 설정

  for (let i = 0; i < actualCount; i++) {
    let row = "";
    for (let j = 0; j < actualCount; j++) {
      row += "*";
    }
    console.log(row);
  }
};

//for...in 사용: 패턴 정보를 객체로 저장 및 출력
const starPatterns = {
  pattern1: "",
  pattern2: "",
  pattern3: "",
  specialStar: "*",
};

//패턴 1: 5개 별
for (let i = 0; i < 5; i++) {
  starPatterns.pattern1 += starPatterns.specialStar;
}
//패턴 2: 3개 별
for (let i = 0; i < 3; i++) {
  starPatterns.pattern2 += starPatterns.specialStar;
}
//패턴 3: 7개 별
for (let i = 0; i < 7; i++) {
  starPatterns.pattern3 += starPatterns.specialStar;
}

console.log("\n--- for...in을 이용한 패턴 출력 ---");
for (const key in starPatterns) {
  if (key !== "specialStar") {
    console.log(`${key}: ${starPatterns[key]}`);
  }
}

//...rest 사용: 여러 숫자를 받아 각 숫자에 대해 별 출력
const printMultipleStars = (...counts) => {
  console.log("\n--- 여러 숫자 별 패턴 ---");
  for (let i = 0; i < counts.length; i++) {
    let currentCount = counts[i];
    const actualCount =
      currentCount >= MIN_STARS && currentCount <= MAX_STARS ? currentCount : 1; // 유효하지 않으면 기본 1개

    let stars = "";
    for (let j = 0; j < actualCount; j++) {
      stars += "*";
    }
    console.log(`Stars for count ${currentCount}: ${stars}`);
  }
};

// 도전 과제 함수 호출 (사용자 입력 numStars가 유효할 경우에만 호출)
if (isValidInput) {
  printReverseStars(Number(userInput));
  printSquare(Number(userInput));

  printMultipleStars(2, 5, 8, 1);
}
