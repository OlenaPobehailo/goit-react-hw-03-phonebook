import PropTypes from 'prop-types';

import { DeleteButton, ListItem } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  // console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name + ': ' + contact.number}
          <DeleteButton
            type="button"
            name="delete"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
