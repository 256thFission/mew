import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

const Form = ({ handleClose }) => {
    const classes = useStyles();
    const { handleSubmit, control } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (

        <div className="flex items-center h-screen w-full bg-colm">
            <div className="w-full bg-lightblu rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <h1 className="block w-full text-center text-grey-darkest mb-6">Create an Event</h1>
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
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
                        sx={{ m: 5 }}

                    />
                )}
                rules={{ required: ' name required' }}
            />

            <Controller
                name="email"
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
                        sx={{ m: 5 }}
                    />
                )}
                rules={{ required: 'Email required' }}
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
                        sx={{ m: 5 }}
                    />
                )}
                rules={{ required: 'Phone Number required' }}
            />
            <Controller
                name="EventName"
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
                        sx={{ m: 5 }}
                    />
                )}
                rules={{ required: 'Event name required' }}
            />
            <Controller
                name="date"
                control={control}
                defaultValue={null}
                render={({ field, ...props }) => {
                    return (
                        <KeyboardDatePicker
                            value={field.value}
                            onChange={(date) => {
                                console.log({ date });
                                field.onChange(date);
                            }}
                            variant="inline"
                            autoOk
                            format="DD/MM/yyyy"
                            // onChange={(e) => field.onChange(e)}
                        />
            <div>
                <Button variant="contained" onClick={handleClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </Button>
            </div>
        </form>
            </div>
        </div>

    );
};

export default Form;