import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { selectedUser } from "../features/actions/user.actions";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { userService } from "../services/user.Service";
import jwt from 'jwt-decode';

const theme = createTheme();

export default function SignInSide() {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);
  console.log("🚀 ~ file: SignIn.jsx ~ line 35 ~ SignInSide ~ loginError", loginError)

  const connectedUser = useSelector((state) => state.user)

  let token = localStorage.getItem("token")

  useEffect(() => {
    handleConnection()
  }, [connectedUser, token])

  const handleConnection = () => {
    if (token && token !== "" && connectedUser) {
      let decreptedToken = jwt(token);
      const isValidUser = connectedUser && connectedUser.id && decreptedToken && decreptedToken.sub && connectedUser.id === decreptedToken.sub
      if (isValidUser) {
        history("/home");
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      userData.userName &&
      userData.password
    ) {

      return await axios
        .post("http://localhost:5000/auth/login", userData, {})
        .then((res) => {
          console.log("🚀 ~ file: SignIn.jsx ~ line 73 ~ .then ~ res", res)
          localStorage.setItem("token", res.data.tokens.access.token)
          dispatch(selectedUser(res.data.user))
        })
        .catch((err) => {
          console.log(err);
          setLoginError(true)
          console.log("🚀 ~ file: SignIn.jsx ~ line 35 ~ SignInSide ~ loginError", loginError)
        });
    }
  };


  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "userName") {
      setUserData((prevState) => {
        return { ...prevState, userName: value };
      });
    } else if (name === "password") {
      setUserData((prevState) => {
        return { ...prevState, password: value };
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 12,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Snackbar open={loginError} autoHideDuration={6000} onClose={() => setLoginError(false)}>
            <Alert onClose={() => setLoginError(false)} severity="error" sx={{ width: '100%' }}>
              UserName or password is incorrect !! Please verify your data
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>

    </ThemeProvider>
  );
}
