import Item from "./item.js";
/**
 * props Drilling
 * bucketList의 선택된 item을 삭제하기 위해
 * main.js에서 삭제함수를 생성
 * 실제 이 함수는 Item.js에서 사용될 함수
 *
 * 현재 Comps 구조상 item을 List가 감싸고
 * List를 Main이 감싸고 있는 구조
 * Main에서 생성된 함수를 Item에서 사용하기 위해선
 * List에게 전달하고, List는 다시 Item에게 전달해야 함
 * List입장에선 사용할 필요없는 함수를 받아서 Toss해야 함
 * Copms가 여러단계로 겹쳐있으면 위 현상이 발생
 */
const List = (props) => {
  // const bucketList = props.bucketList
  const { bucketList, bucketDelete, bucketUpdateView } = props;
  /**
   * 배열 state데이터를 화면에 표현할 땐
   * 반드시 각 item에 unique key값이 있어야 함
   * React가 List화면에 Rendering할 때 모든 데이터를 갱신하는 것이
   * 아니라, 변화가 있는 요소만 갱신하기 위해서 사용하는 값
   */
  const bucketTableList = bucketList?.map((bucket) => (
    <Item
      bucket={bucket}
      key={bucket.b_seq}
      bucketDelete={bucketDelete}
      bucketUpdateView={bucketUpdateView}
    />
  ));
  return (
    <table className="bucket list">
      <thead>
        <tr>
          <th>날짜</th>
          <th>시각</th>
          <th colSpan="2">Bucket</th>
        </tr>
      </thead>
      <tbody>{bucketTableList}</tbody>
    </table>
  );
};

export default List;
