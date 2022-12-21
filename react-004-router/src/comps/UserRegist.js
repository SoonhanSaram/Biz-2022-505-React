import { useParams } from "react-router-dom";
const UserRegist = () => {
  const { username } = useParams();
  return (
    <>
      <h1>회원가입 화면</h1>
      <p>username: {username}</p>
    </>
  );
};

export default UserRegist;
