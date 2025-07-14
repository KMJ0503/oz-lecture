// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");
const taskCount = document.getElementById("taskCount"); // 할 일 개수 표시 요소
const prioritySelect = document.getElementById("priority"); // 우선순위 선택 요소

// 할 일 개수 업데이트 함수
function updateTaskCount() {
  // querySelectorAll을 사용하여 현재 할 일 항목의 개수를 세고 업데이트
  const currentTasks = taskList.querySelectorAll(".task-item").length;
  taskCount.textContent = `현재 할 일: ${currentTasks}개`;
}

// 입력값 검증 및 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();
  const selectedPriority = prioritySelect.value; // 선택된 우선순위 가져오기

  // 입력값이 비어있는지 확인 (유효성 검증) early-return;
  if (taskText === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  // 새로운 리스트 아이템 생성
  const li = document.createElement("li");
  li.className = "task-item";

  // 할 일 텍스트 추가
  const span = document.createElement("span");
  span.textContent = taskText;

  // 우선순위에 따른 스타일 적용
  if (selectedPriority === "high") {
    span.classList.add("high-priority"); // 높은 우선순위 클래스 추가
  }

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.className = "delete-button"; // CSS 클래스 적용

  // 삭제 버튼 이벤트 리스너 (새로 생성되는 버튼에 각각 적용)
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
    updateTaskCount(); // 할 일 삭제 후 개수 업데이트
  });

  // 완료 상태 토글 이벤트 리스너
  span.addEventListener("click", function () {
    span.classList.toggle("completed"); // CSS 클래스 토글
  });

  // 요소 조립
  li.appendChild(span);
  li.appendChild(deleteButton); // 삭제 버튼 추가
  taskList.appendChild(li);

  // 입력창 초기화 및 우선순위 초기화
  taskInput.value = "";
  prioritySelect.value = "low"; // 기본값으로 초기화

  updateTaskCount(); // 할 일 추가 후 개수 업데이트
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
  taskList.innerHTML = ""; // taskList의 모든 자식 요소를 제거
  updateTaskCount(); // 전체 삭제 후 개수 업데이트
}

// 초기 할 일 개수 업데이트
updateTaskCount();

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener("click", clearAllTasks);
