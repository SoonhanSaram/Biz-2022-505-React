import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import {
  NoticeMain,
  BBsMain,
  UserMain,
  UserLogin,
  UserRegist,
  NoticeList,
  NoticeWrite,
} from "../comps/index";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<h1>홈페이지</h1>} />
        <Route path="/notice" element={<NoticeMain />}>
          <Route index element={<NoticeList />} />
          <Route path="write" element={<NoticeWrite />} />
        </Route>
        <Route path="/bbs" element={<BBsMain />}></Route>
      </Route>
      <Route path="/user" element={<UserMain />}>
        <Route path="login" element={<UserLogin />}></Route>
        <Route path="join" element={<UserRegist />}></Route>
        <Route path="profile/:username" element={<UserRegist />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
export default MainRouter;
