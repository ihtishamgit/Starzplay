import React, { useState } from "react";
import { toast } from "react-toastify";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CustomInputStyle } from "../../Common/MuiStyles/Styles";
import api from "../../api";

const theme = createTheme();
const BootstrapInput = CustomInputStyle();
export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
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
  // Submit Data to register
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const obj = {
        email: formData?.email,
        password: formData?.password,
      };
      const response = await api("post", "register", obj);
      if (response.statusText === "Created") {
        toast.success("Registration Successful");
        navigate("/");
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <BootstrapInput
                  type="text"
                  required
                  name="firstname"
                  onChange={handleChange}
                  placeholder="First Name"
                  id="bootstrap-input"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <BootstrapInput
                  type="text"
                  required
                  name="lastname"
                  onChange={handleChange}
                  placeholder="Last Name"
                  id="bootstrap-input"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
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
              {loading? "Signing up...":"Sign Up"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
