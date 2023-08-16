import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import { List, Item, Button } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(selectFilteredContacts);
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

export default ContactsList;
