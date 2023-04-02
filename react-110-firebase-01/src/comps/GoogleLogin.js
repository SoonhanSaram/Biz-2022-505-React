import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useFirebaseContext } from "../provider/FirebaseProvider";
const GoogleLogin = () => {
  const { loginUser, googleSignin, googleSignOut } = useFirebaseContext();
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: "30px", pt: "20px" }}>
        {loginUser ? (
          <Button variant="contained" onClick={googleSignOut}>
            {loginUser?.displayName} 로그아웃
          </Button>
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
