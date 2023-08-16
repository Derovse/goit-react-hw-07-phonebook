// ContactsList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts, selectContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

import { List, Item, Button } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            {name}: {phone}
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
