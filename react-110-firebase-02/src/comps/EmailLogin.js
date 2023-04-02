import { Box, Button, Container, TextField } from "@mui/material";

import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthorContext } from "../firebase/AuthorProvider";

const EmailLogin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { loginMessage, emailLogin } = useAuthorContext();
  // ?변수=값 형식의 query 를 가져오는 함수
  const [queryString] = useSearchParams();
  // ?login=값 형식의 query 에서 값 부분을 추출해 login 변수에 할당
  const login = queryString.get("login");

  const onChangeHandler = useCallback(
    (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    },
    [setUser, user]
  );
  return (
    <Container fixed maxWidth="xl">
      {login == "required" ? (
        <Box
          component="div"
          sx={{
            mb: "15px",
            mt: "15px",
            p: "16px",
            borderRadius: "10px",
            display: "block",
            backgroundColor: "red",
            color: "white",
          }}
        >
          권한이 없습니다, 로그인 해주세요
        </Box>
      ) : (
        <></>
      )}
      <div>
        <TextField
          variant="outlined"
          value={user.email}
          onChange={onChangeHandler}
          fullWidth
          margin="dense"
          label="EMAIL"
          name="email"
        />
      </div>
      <div>
        <TextField
          type="password"
          variant="outlined"
          value={user.password}
          onChange={onChangeHandler}
          fullWidth
          margin="dense"
          label="PASSWORD"
          name="password"
          error={loginMessage === null}
          helperText={
            loginMessage.id === "password" ? loginMessage.message : ""
          }
        />
      </div>
      <div>
        <p>{loginMessage.message}</p>
        <Button
          variant="outlined"
          onClick={() => {
            emailLogin(user);
          }}
        >
          Email 로그인
        </Button>
      </div>
    </Container>
  );
};
export default EmailLogin;
