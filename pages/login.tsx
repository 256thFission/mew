import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import router from 'next/router';
import theme from '../utils/theme';
import { UserAuth } from '../context/AuthContext';
import Link from 'next/link';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      router.push('/multiform');
      // eslint-disable-next-line no-shadow
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      console.log(password, email);
    }
  };
  const onEmailChange = (e) => {
    console.log('Typed => $(e.target.value)');
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    console.log('Typed => $(e.target.value)');
    setPassword(e.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0.5 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={onEmailChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={onPasswordChange}
              id="password"
              autoComplete="current-password"
            />

            <Button
              color="success"
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

          </Box>
          <Link href="https://discord.gg/fT8zpmE4yW">
            <a>
            <span className="text-xs underline hover:text-blue-600 align-self-lg-end  ">
              Or Join Here As a Student
            </span>
            </a>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
