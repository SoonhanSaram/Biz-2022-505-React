const StateInput = (props) => {
  const { setViewList, viewList } = props;

  /**
   * 일반적인 명령형 UI에선
   * event핸들러에서 화면에 접근한 데이터 표현 코드가 필요
   * 1. selector를 수행하고
   * 2. createElement를 수행해 내용을 완성
   * 3. selector에 append 수행
   */

  /**
   * react style UI구현 : 선언형 UI
   * 특징 : 화면을 구현하는 부분과 데이터를 변화시켜주는 부분의 코드가
   *    연관없어 보임, UI추상화
   *    화면구현과 실제 데이터변화를 연결해 원하는 UI를 만들어내기
   *    react에서는 querySelector, createElement를 사용해 화면을 구현
   *    하는 것을 될 수 있으면 사용자제
   *
   * 1. react에서는 실제 Dom과 가상(virture) Dom이 동시에 존재
   * 2. querySelector (getElement...) 등을 사용해 Dom을 선택하면
   * 3. 선택된 Dom이 실제 Dom인지 가상 Dom인지 개발자가 선택 불가
   * 4. 실제 Dom을 선택했더라도 react엔진은 state 변수를 감시하고 있다
   *    개발자의 의도와 상관없이 화면을 reRendering 할 것이고 그 과정에서
   *    여러 문제가 발생할 수 있음
   * 5. 화면에 변화를 주고싶다면 반드시 state를 변화
   */
  const onKeyDownhandler = (e) => {
    const value = e.target.value;
    if (e.keyCode === 13) {
      setViewList([...viewList, value]);
    }
  };
  return <input onKeyDown={onKeyDownhandler}></input>;
};

export default StateInput;
