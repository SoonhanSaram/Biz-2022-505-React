const Input = (props) => {
  const { bucket, bucketInsert, setBucket } = props;
  const onKeyDownHandler = (e) => {
    // Enter의 keycode : 13
    // Esc의 keycode : 27
    if (e.keyCode === 13) {
      const content = e.target.value;
      setBucket({ ...bucket, b_content: content });
      //props.bucketInsert(content);
      bucketInsert();
      
      e.target.select();
    }
  };
  /**
   * input tag의 value 속성 성질
   * value 속성은 input box 키보드 입력이 되면
   * 입력된 문자열들을 담아놓는 속성
   * React에서는 input tag의 value 속성에 state 변수를 연결
   * input에 문자열이 입력되면 반응하도록 코딩한다.
   *
   * input value 속성에 state변수를 연결 시
   * input은 readonly 속성을 갖게 됨
   *
   * React에선 input tag의 onChange event를 설정해
   * 키보드 입력 문자열을 state변수에 반영해야 함
   */
  const bucketOnChangeHandler = (e) => {
    const value = e.target.value;
    setBucket({ ...bucket, b_content: value });
  };
  return (
    <input
      value={bucket.b_content}
      onKeyDown={onKeyDownHandler}
      onChange={bucketOnChangeHandler}
      placeholder="버킷에 추가할 내용을 입력하세요"
    />
  );
};

export default Input;
