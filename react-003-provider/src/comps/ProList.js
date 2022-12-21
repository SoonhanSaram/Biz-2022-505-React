import ProItem from "./ProItem";
import ProValue from "./ProValue";
import { useProContext } from "../context/ProContext";
/**
 * ProList에서는 직접 nation state를 사용할 필요가 없지만
 * ProItem에게 전달하기 위해 props로 받고 전달
 *
 * => ContextProvider를 통해서 state변수와 setState()함수를 ProItem에서
 *  직접 전달 받아 ProList 중간 전달 역할 할 필요없음
 */
const ProList = () => {
  const { nationList } = useProContext();

  const nationListView = nationList.map((nation) => {
    return (
      <h3>
        <ProItem nation={nation} />
      </h3>
    );
  });
  return (
    <>
      <ProValue />
      {nationListView}
    </>
  );
};

export default ProList;
