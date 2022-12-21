import { Outlet } from "react-router-dom";
const UserMain = () => {
  return (
    <>
      <h1>userpage</h1>;
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserMain;
