import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { ContactItem } from "./ContactItem";

export function ContactList({ contactList, searchValue }) {
  const filteredList = contactList.filter((contact) =>
    contact.name.includes(searchValue.toLowerCase())
  );

  if (filteredList.length === 0 && contactList.length > 0) {
    return <Alert severity="warning">nic nie znaleziono</Alert>;
  }

  return (
    <List>
      {filteredList.map((contact) => {
        const labelId = `checkbox-list-contact-label-${contact.id}`;
        return (
          <ContactItem key={contact.id} data={contact} labelId={labelId} />
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.array,
  searchValue: PropTypes.string,
};
