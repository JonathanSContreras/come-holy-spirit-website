import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  message: yup.string().required('Message is required'),
});

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" ref={register} />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" ref={register} />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="message">Message:</label>
      <textarea name="message" ref={register} />
      {errors.message && <p>{errors.message.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;