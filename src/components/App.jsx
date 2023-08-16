// App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Wrap } from './App.styled';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrap>
      <ContactForm />
      <Filter />
      <ContactsList />
    </Wrap>
  );
}
