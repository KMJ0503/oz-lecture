//변수 선언
const maxScore = 100; //최대 점수 (const 사용)
let scoreInput; //사용자 입력 점수를 받을 변수 (let 사용)
var finalScore; //보너스 점수 적용 후 최종 점수 (var 사용)
let grade; //최종 등급을 저장할 변수
let statusMessage; //합격/불합격 상태
let gradeMessage; //등급별

//입출력
scoreInput = prompt("점수를 입력하세요.");

//단항 산술 연산자 (+)를 사용
let originalScore = +scoreInput;

console.log("입력 점수:", originalScore); //사용자가 입력한 원본 점수 확인

//연산자 사용:
finalScore = originalScore + 5; //이항 산술 연산자 (+)사용

finalScore = finalScore <= maxScore ? finalScore : maxScore;
//삼항 연산자 사용하여 최대 100점 제한

console.log("Final Score:", finalScore);

//조건문: 등급 부여 (if, else if, else만 사용)
// S: 100 이상
// A: 90 이상 100 이하
// B: 80 이상 90 미만
// C: 70 이상 80 미만
// D: 60 이상 70 미만
// F: 60 미만

if (finalScore >= 100) {
  grade = "S";
} else if (finalScore >= 90) {
  grade = "A";
} else if (finalScore >= 80) {
  grade = "B";
} else if (finalScore >= 70) {
  grade = "C";
} else if (finalScore >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Grade:", grade);

//삼항 연산자: 합격/불합격 판단 (60점 이상이면 "Pass", 미만이면 "Fail")
statusMessage = finalScore >= 60 ? "Pass" : "Fail";
console.log("Status:", statusMessage);

//조건문: 등급별 메시지 출력 (switch 사용)
switch (grade) {
  case "S":
    gradeMessage = "Super!!";
    break;
  case "A":
    gradeMessage = "Excellent work!";
    break;
  case "B":
    gradeMessage = "Good job!";
    break;
  case "C":
    gradeMessage = "Satisfactory performance.";
    break;
  case "D":
    gradeMessage = "Needs improvement.";
    break;
  case "F":
    gradeMessage = "Please try harder!";
    break;
}

console.log("Message:", gradeMessage);
