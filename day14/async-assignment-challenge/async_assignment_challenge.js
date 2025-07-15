//DOM 요소 선택
const postIdsInput = document.getElementById("postIds");
const fetchPostsButton = document.getElementById("fetchPosts");
const outputDiv = document.getElementById("output");

//변수 선언
const BASE_URL = "https://jsonplaceholder.typicode.com/posts"; // API 기본 URL (const 사용)
const MIN_ID = 1; // 최소 게시물 ID (const 사용)
const MAX_ID = 100; // 최대 게시물 ID (const 사용)
let currentFetchPromise; // 현재 진행 중인 Promise를 저장할 변수 (let 사용)
var isFetching = false; // 데이터 가져오는 중인지 여부 (var 사용)

//화살표 함수: fetchMultiplePosts (데이터 가져오기)
const fetchMultiplePosts = async (...ids) => {
  outputDiv.innerHTML = "";
  outputDiv.classList.remove("error");

  //버튼 비활성화 및 isFetching 플래그 설정
  fetchPostsButton.disabled = true;
  isFetching = true;

  //유효한 ID만 필터링
  const validIds = [];
  for (const id of ids) {
    const parsedId = Number(id);
    if (!isNaN(parsedId) && parsedId >= MIN_ID && parsedId <= MAX_ID) {
      validIds.push(parsedId);
    }
  }

  //가져올 Promise 배열 생성
  const fetchPromises = [];
  for (const id of validIds) {
    fetchPromises.push(
      fetch(`${BASE_URL}/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `HTTP error! status: ${response.status} for ID: ${id}`
            );
          }
          return response.json();
        })
        .catch((error) => {
          return { id: id, error: `에러: ${error.message}` };
        })
    );
  }

  let results = [];
  try {
    results = await Promise.all(fetchPromises);
  } catch (overallError) {
    outputDiv.innerHTML = `<div class="error post">전체 데이터 가져오기 중 오류 발생: ${overallError.message}</div>`;
    fetchPostsButton.disabled = false;
    isFetching = false;
    return;
  }

  //결과 렌더링
  let outputHTML = "";
  let postCount = 0; // 게시물 번호
  for (const result of results) {
    postCount++; // 게시물 번호 증가

    if (result.error) {
      outputHTML += `<div class="post error">post${postCount}: ${result.error} (ID: ${result.id})</div>`;
    } else {
      outputHTML += `<div class="post">post${postCount}: ${result.title}</div>`;
    }
  }
  outputDiv.innerHTML = outputHTML;

  //버튼 재활성화 및 isFetching 플래그 재설정
  fetchPostsButton.disabled = false;
  isFetching = false;
};

//함수 표현식: runChallenge (메인 로직 구현)
const runChallenge = function () {
  if (isFetching) {
    return;
  }
  const inputIdsString = postIdsInput.value;
  const idsArray = inputIdsString.split(",").map((id) => id.trim());

  let allIdsAreValid = true;
  if (inputIdsString.trim() === "") {
    allIdsAreValid = false;
  } else {
    for (const idStr of idsArray) {
      const parsedId = Number(idStr);
      if (isNaN(parsedId) || parsedId < MIN_ID || parsedId > MAX_ID) {
        allIdsAreValid = false;
        break;
      }
    }
  }

  if (!allIdsAreValid) {
    outputDiv.innerHTML = `<div class="error">유효한 ID(1-100)를 입력하세요! (예: 1,2,3)</div>`;
    outputDiv.classList.add("error");
    return;
  }

  fetchMultiplePosts(...idsArray);
};

//"게시물 가져오기" 버튼 클릭 시 메인 로직 실행
fetchPostsButton.addEventListener("click", runChallenge);
