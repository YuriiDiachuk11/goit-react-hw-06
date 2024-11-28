import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContact={() => onDeleteContact(contact.id)}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
