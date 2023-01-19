export const getMyBooks = async (username) => {
  try {
    const response = await fetch(`/api/book/my/${username}`);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addMyBooks = async (book, username) => {
  const fetchOption = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ username, book }),
  };
  console.log(book);
  const response = await fetch("/api/book/insert", fetchOption);
  /**
   * 수신한 http 프로토콜의 response 객체에서 json type의 데이터만 getter
   */
  const result = await response.json();
  console.log("addMybook", result);
};

/**
 * 바닐라 JS 엔진엔 내장 객체가 있음
 * JSON 객체 : json type 의 데이터를 변환하거나 적절하게 가공하는 용도
 *
 * 아래 선언은 json type 으로 보이지만 String 데이터
 * const jsonString = `{"name" : "홍길동", "age":33}`,
 *
 * jsonString 을 실제 JSON 데이터로 변환하려면
 * JSON 내장객체에 미리 준비된 parse() 함수를 사용해 JSON 객체로 변환해야 함
 * const jsonObj =  JSON.parse(jsonString)
 * 해야 하고 이후에 jsonString.name 으로 참조 할 수 있음
 *
 *
 * 네트워크 이론에서의 Serialize :
 * internet TCP/IP 프로토콜 중에 http 프로토콜을 사용해 데이터를 주고 받음
 * 여기서 사용할 수 있는데 데이터는 모두 char(문자) 들
 * 애플리케이션 내에서 어떤 type 의 데이터가 만들어지더라도 데이터를 http 프로토콜에
 * 실어서 보내려면 char의 집합으로 만들어야함
 *
 * fetch 사용하여 데이터를 body 담을 때 JSON.stringify() 함수를 사용하는 이유는
 * JSON 객체를 문자(char)들의 집합으로 변환하는 것
 */
