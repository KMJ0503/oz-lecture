//DOM 요소 선택
const timerInput = document.getElementById("timerInput");
const startButton = document.getElementById("startTimer");
const timerDisplay = document.getElementById("timerDisplay");

//변수 선언
const MAX_TIME = 10; //최대 시간 제한 (const 사용)
const MIN_TIME = 1; //최소 시간 제한 (const 사용)
let timerCount; //현재 타이머 카운트를 저장할 변수 (let 사용)
var currentInterval; //setInterval ID를 저장할 변수 (var 사용)

//타이머 시작 로직 함수
//매개변수 기본값 사용 (요구사항: seconds = 10) - 여기서는 사용자 입력 우선
function startTimerLogic(seconds = MAX_TIME) {
  if (currentInterval) {
    clearInterval(currentInterval);
  }

  //에러 메시지 후 재시작 시 필요
  timerDisplay.classList.remove("error");

  timerCount = seconds; //타이머 카운트 초기화

  //타이머 시작 버튼 비활성화
  startButton.disabled = true;

  //비동기 처리
  currentInterval = setInterval(function () {
    if (timerCount > 0) {
      //HTML 화면에 진행 상황 표시
      timerDisplay.textContent = `타이머: ${timerCount}초`;
      timerCount--;
    } else {
      //타이머 종료
      clearInterval(currentInterval);
      timerDisplay.textContent = "타이머 종료!";
      startButton.disabled = false;
    }
  }, 1000);
}

//타이머 시작 버튼 클릭
startButton.addEventListener("click", function () {
  let inputSeconds = timerInput.value;

  let parsedSeconds = Number(inputSeconds);

  //조건문과 연산자: 입력 유효성 검사
  if (
    isNaN(parsedSeconds) ||
    parsedSeconds < MIN_TIME ||
    parsedSeconds > MAX_TIME ||
    inputSeconds.trim() === ""
  ) {
    //유효하지 않은 입력 시
    timerDisplay.textContent = "유효한 숫자(1-10)를 입력하세요!"; //에러 메시지
    timerDisplay.classList.add("error"); // `.error` 클래스로 빨간색 표시
    startButton.disabled = false;
  } else {
    //유효한 입력 시 타이머 시작
    startTimerLogic(parsedSeconds);
  }
});
