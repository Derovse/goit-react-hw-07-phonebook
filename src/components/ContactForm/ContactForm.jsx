// ContactForm.jsx
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

import {
  FormContact,
  Label,
  Input,
  Button,
  ErrorText,
} from './ContactForm.styled';

const nameValidate =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const phoneValidate = RegExp(
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{1,3}\\)[ \\-]*)|([0-9]{1,4})[ \\-]*)*?[0-9]{1,4}?[ \\-]*[0-9]{1,9}?$/
);

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(nameValidate, 'Name may contain only letters'),
  phone: yup
    .string()
    .required()
    .matches(phoneValidate, 'Phone number must be digits'),
});

const initialValues = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const newContact = {
      name: values.name,
      phone: values.phone,
    };
    dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormContact autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name"></Input>
          <ErrorText component="div" name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="phone"></Input>
          <ErrorText component="div" name="phone" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContact>
    </Formik>
  );
};
