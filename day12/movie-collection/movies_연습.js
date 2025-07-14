//변수 선언 (기본 과제)
let movieCollection = []; // 영화 객체를 저장할 배열 (let 사용)
const DEFAULT_DIRECTOR = "Unknown Director"; // 감독 기본값 (const 사용)
const DEFAULT_GENRE = "Unknown Genre"; // 장르 기본값 (const 사용)
var totalMoviesCount; // 총 영화 수를 저장할 변수 (var 사용)

//함수 선언문: 영화 목록 출력 함수 (기본 과제)
function printMovies(moviesArray) {
  console.log("Movie Collection:\n"); // 헤더 출력

  for (let i = 0; i < moviesArray.length; i++) {
    let movie = moviesArray[i];

    if (!movie.title) {
      movie.title = "Unknown Title";
    }
    if (!movie.director) {
      movie.director = DEFAULT_DIRECTOR;
    }
    if (!movie.year || typeof movie.year !== "number") {
      movie.year = 0;
    }
    if (!movie.genre) {
      movie.genre = DEFAULT_GENRE;
    }

    console.log(
      `${i + 1}. 제목: ${movie.title}, 감독: ${movie.director}, Year: ${
        movie.year
      }, 장르: ${movie.genre}`
    );
  }

  totalMoviesCount = moviesArray.length;
  console.log(`\nTotal Movies: ${totalMoviesCount}`);
}

// --- 도전 과제 시작 ---

//...rest를 사용하여 여러 영화 객체를 한 번에 추가
//함수 선언문 (기본 함수와 구분하기 위해 이름 변경)
function addMovies(...newMovies) {
  // ...rest 매개변수 사용
  console.log("\n--- 새 영화 추가 중 ---");
  for (let i = 0; i < newMovies.length; i++) {
    let movie = newMovies[i];
    // 영화 객체 유효성 간단히 확인 (title 필수)
    if (movie && movie.title) {
      movieCollection.push(movie);
      console.log(`Added: ${movie.title}`);
    } else {
      console.log("Warning: Invalid movie object skipped.");
    }
  }
  console.log("--- 영화 추가 완료 ---\n");
}

//영화 데이터 초기화 및 추가
//초기 영화 데이터
addMovies(
  { title: "매트릭스", director: "위쇼스키", year: 1999, genre: "Sci-Fi" },
  { title: "인셉션", director: "놀란", year: 2010, genre: "Sci-Fi" },
  { title: "기생충", director: "봉준호", year: 2019, genre: "드라마" }
);

//추가 영화 데이터
addMovies(
  { title: "인터스텔라", director: "놀란", year: 2014, genre: "Sci-Fi" },
  {
    title: "어벤져스 : 엔드게임",
    director: "루소 형제",
    year: 2019,
    genre: "액션",
  },
  {
    title: "센과 치히로의 행방불명",
    director: "미야자키",
    year: 2001,
    genre: "애니메이션",
  },
  { title: "컨택트", director: "빌뇌브", year: 2016, genre: "Sci-Fi" } // Sci-Fi 추가
);

//영화 검색: 특정 장르의 영화만 출력
function searchMoviesByGenre(genreToSearch) {
  console.log(`\n--- ${genreToSearch} Movies ---`);
  let foundMoviesCount = 0;

  for (let i = 0; i < movieCollection.length; i++) {
    let movie = movieCollection[i];

    // for...in을 사용하여 영화 객체의 속성을 순회하며 장르 확인
    let movieGenre = "";
    for (const key in movie) {
      if (key === "장르") {
        movieGenre = movie[key];
        break;
      }
    }

    if (movieGenre === genreToSearch) {
      foundMoviesCount++;
      console.log(
        `${foundMoviesCount}. 제목: ${movie.title}, 감독: ${movie.director}, Year: ${movie.year}, 장르: ${movie.genre}`
      );
    }
  }

  if (foundMoviesCount === 0) {
    console.log(`No movies found for genre: ${genreToSearch}.`);
  }
}

//통계 계산: 함수 표현식 (평균 출판년도)
const calculateAverageYear = function (moviesArray) {
  let totalYears = 0;
  if (moviesArray.length === 0) {
    return 0; // 영화가 없으면 0 반환
  }
  for (let i = 0; i < moviesArray.length; i++) {
    // 유효한 year가 아니면 0으로 처리 (평균 계산에 영향 주지 않도록)
    totalYears += moviesArray[i].year || 0;
  }
  return totalYears / moviesArray.length;
};

// 7. 통계 계산: 화살표 함수 (가장 최신 영화 찾기)
const findNewestMovie = (moviesArray) => {
  if (moviesArray.length === 0) {
    return null; // 영화가 없으면 null 반환
  }

  let newest = moviesArray[0]; // 첫 번째 영화를 가장 최신으로 가정
  for (let i = 1; i < moviesArray.length; i++) {
    if (moviesArray[i].year > newest.year) {
      // 더 최신 영화를 찾으면 업데이트
      newest = moviesArray[i];
    }
  }
  return newest;
};

// --- 모든 기능 실행 ---

// 1. 전체 영화 목록 출력 (기본 과제)
printMovies(movieCollection);

// 2. 영화 검색 실행
searchMoviesByGenre("Sci-Fi");
searchMoviesByGenre("드라마");
searchMoviesByGenre("코메디"); // 없는 장르 검색 예시

// 3. 통계 계산 실행
console.log("\n--- Statistics ---");
const avgYear = calculateAverageYear(movieCollection);
const newestMovie = findNewestMovie(movieCollection);

console.log(`Average Year: ${Math.round(avgYear)}`); // 반올림하여 출력

if (newestMovie) {
  console.log(`Newest Movie: ${newestMovie.title} (${newestMovie.year})`);
} else {
  console.log("Newest Movie: N/A (No movies in collection)");
}
