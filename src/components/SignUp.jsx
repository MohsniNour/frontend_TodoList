import React,{ useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/user.Service";

const theme = createTheme();

export default function SignUpSide() {
  let history = useNavigate();
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "userName") {
      setState((prevState) => {
        return { ...prevState, userName: value };
      });
    } else if (name === "email") {
      setState((prevState) => {
        return { ...prevState, email: value };
      });
    } else if (name === "password") {
      setState((prevState) => {
        return { ...prevState, password: value };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (
      state.userName &&
      state.email &&
      state.password
    ) {
      userService.addUser(state);
      history("/");
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  const handlePage = () => {
    history("/home");
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
            <Typography component="h2" variant="h5">
              Register
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
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/" variant="body2">
                    {"You have an account ? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
