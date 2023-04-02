import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useAuthorContext } from "../firebase/AuthorProvider";

const GoogleLogin = () => {
  const { loginUser, googleSignin, googleSignOut } = useAuthorContext();
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: "30px", pt: "20px" }}>
        {loginUser ? (
          <>
            <p>{loginUser?.email}</p>
            <Button variant="contained" onClick={googleSignOut}>
              {loginUser?.email} 로그아웃
            </Button>
          </>
        ) : (
          <Button variant="contained" onClick={googleSignin}>
            구글 로그인
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default GoogleLogin;
