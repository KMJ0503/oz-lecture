//변수 선언
let movieCollection = []; //영화 객체를 저장할 배열 (let 사용)
const DEFAULT_DIRECTOR = "Unknown Director"; //감독 기본값 (const 사용)
const DEFAULT_GENRE = "Unknown Genre"; //장르 기본값 (const 사용)
var totalMoviesCount; //총 영화 수를 저장할 변수 (var 사용)

//영화 객체 생성 및 배열에 추가(title, director, year, genre 속성 포함)

//영화 1
let movie1 = {
  title: "The Matrix",
  director: "Wachowskis",
  year: 1999,
  genre: "Sci-Fi",
};
movieCollection.push(movie1);

//영화 2
let movie2 = {
  title: "Inception",
  director: "Nolan",
  year: 2010,
  //genre(장르 속성 누락)
};
movieCollection.push(movie2);

//영화 3
let movie3 = {
  title: "Parasite",
  director: "Bong",
  year: 2019,
  genre: "Drama",
};
movieCollection.push(movie3);

//영화 4
let movie4 = {
  title: "Oldboy",
  //director(감독 속성 누락)
  year: 2003,
  genre: "Action",
};
movieCollection.push(movie4);

//함수 선언문: 영화 목록 출력 함수
function printMovies(moviesArray) {
  console.log("Movie Collection:\n");

  for (let i = 0; i < moviesArray.length; i++) {
    let movie = moviesArray[i];
    //조건문과 연산자: 빈 속성 확인 후 기본값 설정
    //title 속성 확인 (없으면 "Unknown Title"로 설정)
    if (!movie.title) {
      movie.title = "Unknown Title";
    }
    //director 속성 확인 (없으면 DEFAULT_DIRECTOR로 설정)
    if (!movie.director) {
      movie.director = DEFAULT_DIRECTOR;
    }
    //year 속성 확인 (없거나 유효하지 않으면 0으로 설정)
    if (!movie.year || typeof movie.year !== "number") {
      movie.year = 0;
    }
    //genre 속성 확인 (없으면 DEFAULT_GENRE로 설정)
    if (!movie.genre) {
      movie.genre = DEFAULT_GENRE;
    }

    //템플릿 리터럴을 사용하여 가독성 좋은 출력 형식 생성
    console.log(
      `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${
        movie.year
      }, Genre: ${movie.genre}`
    );
  }

  //총 영화 수 계산 및 출력
  totalMoviesCount = moviesArray.length;
  console.log(`\nTotal Movies: ${totalMoviesCount}`);
}

//함수 호출: 영화 목록 출력
printMovies(movieCollection);
