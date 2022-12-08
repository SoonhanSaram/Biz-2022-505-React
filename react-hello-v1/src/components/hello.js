/**
 * JSX Component 작성규칙
 * 1. 모든 Component tag는 반드시 1개의 tag로 묶어야한다.
 *
 */
const Hello = () => {
  return (
    <>
      <div>
        <h1>안녕하세요</h1>
        <p>반갑습니다</p>
        <p>우리나라만세</p>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>게시판</li>
          <li>공지사항</li>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
    </>
  );
};

export default Hello;
