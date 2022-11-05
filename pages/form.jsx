// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import { makeStyles, StylesProvider } from '@mui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import '@fontsource/roboto-mono';
import Grid from '@material-ui/core/Grid';
import {
  Box, ThemeProvider, Typography,
} from '@mui/material';
import axios from 'axios';
import theme from '../utils/theme';
import { withProtected } from '../context/route';

const font = "'Roboto Mono', monospace";

const useStyles = makeStyles((theme) => ({
  spacing: 4,
  typography: {
    fontFamily: 'Roboto Mono',
  },
  div: {
    fontFamily: 'Roboto Mono',
  },

}));

// eslint-disable-next-line react/prop-types
function Form({ handleClose }) {
  const classes = useStyles();
  const {
    handleSubmit, control, watch, setValue,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    axios
      .post(
        'https://getform.io/f/eea65ccb-1246-4e42-87ce-85492c9aee13',
        data,
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then((response) => { console.log(response.data); })
      .catch((error) => { console.log(error.data); });
    alert('Submission Successful');
  };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="flex items-center h-screen w-full bg-gradient-to-br from-indep to-paste">

          {' '}

          <form
            id="signform"
          // action="https://getform.io/f/eea65ccb-1246-4e42-87ce-85492c9aee13"
          // method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid
              container
              spacing={0}
              direction="column"
              align="center"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '100vh' }}
            >
              <Typography sx={{ textDecoration: 'underline' }} variant="h2" component="div"> Event Creator</Typography>

              <Box sx={{
                bgcolor: 'background.paper',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 3,
                border: 2,
                borderRadius: 3,
                borderColor: 'primary.main',
                width: '140%',
                m: 5,
                p: 4,

              }}
              >
                <Controller
                  name="Organization Name"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="Organization Name"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />

                <Controller
                  name="Email"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="Email"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                      type="email"
                    />
                  )}
                />

                <Controller
                  name="Phone Number"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="Phone Number"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
                <Controller
                  name="Event Name"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="Event Name"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
                <Controller
                  name="Date"
                  control={control}
                  defaultValue="MM/DD/YYYY"
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="Date"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
                <Controller
                  name="Time"
                  control={control}
                  defaultValue="X:YZ _M"
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="Time"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
                <Controller
                  name="Address"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="Location"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
                <Controller
                  name="# of Volunteers"
                  control={control}
                  defaultValue="1"
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="# of Volunteers"
                      variant="filled"
                      value={value}
                      type="number"
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
                <Controller
                  name="Description"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="Description"
                      variant="filled"
                      multiline
                      minRows={4}
                      maxrows={8}
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
                <div />

                <Controller
                  name="SignUp-Link"
                  control={control}
                  defaultValue=""
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      label="Your Sign up Link"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      // helperText="Or leave blank to use ours!"
                      sx={{}}
                    />
                  )}
                />
              </Box>
              <div>
                <Button
                  color="secondary"
                  size="large"
                  variant="outlined"
                  fullWidth = {true}
                  onClick={

                  handleSubmit(onSubmit)
}
                >
                  Submit
                </Button>

              </div>
            </Grid>
          </form>

        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default withProtected(Form);
