async function getPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    alert("에러: " + error.message);
  }
}
getPost();
