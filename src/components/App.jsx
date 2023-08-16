// App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import ContactsList from '../components/ContactsList/ContactsList';
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
