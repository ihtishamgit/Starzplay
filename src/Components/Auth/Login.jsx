import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// mui imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CustomInputStyle } from "../../Common/MuiStyles/Styles";
import { toast } from "react-toastify";
import api from "../../api";
import {reactLocalStorage} from 'reactjs-localstorage';

const theme = createTheme();
const BootstrapInput = CustomInputStyle();
function Login() {
  // state to set form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await api("post", "login", formData);
      if (response.status === 200) {
        reactLocalStorage.setObject('token', response.data);
        toast.success('LoggedIn Successfully');
        window.location.href='/'
      }
    } catch (err) {
      toast.error(err.response.data);
    }
    finally{
      setLoading(false)
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
              <BootstrapInput
                  type="email"
                  required
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                  id="bootstrap-input"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
              <BootstrapInput
                  type="password"
                  required
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  id="bootstrap-input"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ?"Signing in...": "Sign In"}
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/register" variant="body2">
                  Dont have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
