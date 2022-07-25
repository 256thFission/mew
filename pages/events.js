import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Events.module.css'

export default function signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form
        action="https://getform.io/f/eea65ccb-1246-4e42-87ce-85492c9aee13"
        method="POST"
        >
            <input type="text" placeholder="Organization Name" {...register("Organization Name", {required: true})} />
            <input type="text" placeholder="Event Name" {...register("Event Name", {required: true})} />
            <input type="datetime-local" placeholder="Date & Time" {...register("Date & Time", {required: true})} />
            <input type="number" placeholder="# of Volunteers" {...register("# of Volunteers", {required: true})} />
            <input type="email" placeholder="Contact Email" {...register("Contact Email", {})} />
            <input type="text" placeholder="Phone Number " {...register("Phone Number ", {})} />
            <textarea {...register("Description, Instructions, and Other Notes", {})} />

            <button type="submit">Submit</button>
        </form>
    );
}