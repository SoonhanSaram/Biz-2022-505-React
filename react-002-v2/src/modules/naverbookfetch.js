import { CLIENT_ID, CLIENT_SECRET } from "../config/naversecret";

/**
 * React에서 API 참조시 CORS오류 발생하는 경우
 * package.json에 아래 항목설정
 * "proxy": "https://openapi.naver.com/v1",
 */
const NAVER_BOOK_JSON_URL = "/search/book.json";

const NAVER_CLIENT_ID_KEY = "X-Naver-Client-Id";
const NAVER_CLIENT_SECRET_KEY = "X-Naver-Client-Secret";

const getQueryData = async (query) => {
  const queryString = `${NAVER_BOOK_JSON_URL}?query=${encodeURIComponent(
    query
  )}`;
  const naverFetchOption = {
    method: "GET",
    headers: {
      [NAVER_CLIENT_ID_KEY]: CLIENT_ID,
      [NAVER_CLIENT_SECRET_KEY]: CLIENT_SECRET,
    },
  };
  const res = await fetch(queryString, naverFetchOption);
  const result = await res.json();
  /**
   * async await로 수신한 데이터들을 return하고자 할 때
   * 아무리 이전 코드에서 await를 해도 return은 await가 안됨
   * 모든 데이터가 다 완성된 후 Promise.all() return하도록 만들어준다
   * retrun 받은 데이터에 Pending이라는 단어가 보이면
   * Promise.all()을 먼저 실행
   */
  return Promise.all(result.items);
};
export { getQueryData };
