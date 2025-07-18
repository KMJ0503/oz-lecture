// detail.js (포스트 상세 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 상세 정보 표시
async function displayPostDetail() {
  // URL에서 postId 가져오기
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");
    if (!postId) throw new Error("No post ID provided"); // post ID가 없으면 에러 발생

    let post = {};
    const cacheKey = `post_${postId}`; // 캐시 저장에 사용할 키

    // localStorage에서 캐시 확인
    const cachedData = localStorage.getItem(cacheKey);
    const currentTime = Date.now(); // 현재 시간 (밀리초)
    const FIVE_MINUTES = 5 * 60 * 1000; // 5분 = 300,000 밀리초

    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);

      // 캐시가 유효한지 (5분 이내인지) 확인
      if (currentTime - timestamp < FIVE_MINUTES) {
        post = data;
        console.log("Post loaded from localStorage");
      } else {
        console.log("Cache expired, fetching from API...");
        localStorage.removeItem(cacheKey);

        const response = await fetch(`${apiUrl}/posts/${postId}`);
        if (!response.ok) throw new Error(`Failed to fetch post ID ${postId}`);
        post = await response.json();

        localStorage.setItem(
          cacheKey,
          JSON.stringify({ data: post, timestamp: Date.now() })
        );
        console.log("Post fetched from API");
      }
    } else {
      console.log("No cache found, fetching from API...");
      const response = await fetch(`${apiUrl}/posts/${postId}`);
      if (!response.ok) throw new Error(`Failed to fetch post ID ${postId}`);
      post = await response.json();

      localStorage.setItem(
        cacheKey,
        JSON.stringify({ data: post, timestamp: Date.now() })
      );
      console.log("Post fetched from API");
    }

    renderPost(post);
  } catch (error) {
    console.error("Error:", error.message);
    document.getElementById("post-detail").innerHTML =
      "<p>Error loading post details</p>";
  }
}

// 포스트 렌더링 함수
function renderPost(post) {
  const postDetail = document.getElementById("post-detail");
  postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
}

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
