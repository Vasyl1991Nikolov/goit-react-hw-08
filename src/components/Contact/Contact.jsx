import { FaPhone } from 'react-icons/fa6';
import { FaUserLarge } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import s from './Contact.module.css';
const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number, id } = contact;

  return (
    <>
      <div className={s.container}>
        <p>
          <FaUserLarge /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
export default Contact;