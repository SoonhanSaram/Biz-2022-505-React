import { useState } from "react";
import List from "./List.js";
import Input from "./Input.js";
import "../../css/bucket.css";

import uuid from "react-uuid";
import moment from "moment";

const BucketMain = () => {
  // input에서 문자열을 입력한 문자열을 저장할 state 변수와
  // seq 선언
  const [bucket, setBucket] = useState({
    b_seq: null,
    b_content: "",
  });
  //  bucketData 형식의 객체 배열 state(변수) 선언
  const [bucketList, setBucketList] = useState([]);
  /**
   * 입력된 bucket 내용을 bucketList에 추가하는 함수
   */
  const bucketInsert = () => {
    // 새로운 값을 입력할 때

    if (!bucket.b_seq) {
      setBucketList([
        ...bucketList,
        {
          b_seq: uuid(),
          b_date: moment().format("YY[-]MM[-]DD"),
          b_time: moment().format("HH:mm:ss"),
          b_content: bucket.b_content,
        },
      ]);
    } else {
      const updatgeBucketList = bucketList.map((item) => {
        if (item.b_seq === bucket.b_seq) {
          return { ...item, b_content: bucket.b_content };
        }
        return item;
      });
      setBucketList([...updatgeBucketList]);
    }
    setBucket({ ...bucket, b_seq: null });
  }; // end insert
  //  배열에 bucket 추가하기
  // React에선 절대 사용 불가 코드
  // bucketList.push(bucket);
  // 원래있던 bucketList와 새로운 bucket을
  // Concat(결합)해 새로운 배열을
  // setBucketList 함수에 전달해 bucketList 갱신

  const bucketDelete = (seq) => {
    const filteredBucket = bucketList.filter((list) => {
      return list.b_seq !== seq;
    });
    setBucketList([...filteredBucket]);
    //위 코드와 동일 setBucketList(filteredBucket);
  }; //end delete
  const bucketUpdateView = (seq, content) => {
    // bucket state 변수 중에 b_seq, b_content만 변경
    setBucket({ ...bucket, b_seq: seq, b_content: content });
  };
  return (
    <div className="bucket main">
      <Input
        bucketInsert={bucketInsert}
        bucket={bucket}
        setBucket={setBucket}
      />
      <List
        bucketList={bucketList}
        bucketUpdateView={bucketUpdateView}
        bucketDelete={bucketDelete}
      />
    </div>
  );
};

export default BucketMain;
