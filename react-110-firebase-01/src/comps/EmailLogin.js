import { Button, Container, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useFirebaseContext } from "../provider/FirebaseProvider";

const EmailLogin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { loginMessage, emailLogin } = useFirebaseContext();
  const onChangeHandler = useCallback(
    (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    },
    [setUser, user]
  );
  return (
    <Container fixed maxWidth="xl">
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
