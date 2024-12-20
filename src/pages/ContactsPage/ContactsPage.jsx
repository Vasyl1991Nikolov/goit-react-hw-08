import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import { selectContacts, selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import clsx from 'clsx';
import s from '../ContactsPage/ContactsPage.module.css';
const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.section}>
      <div className={clsx('container', s['contacts-container'])}>
        <h1 style={{ fontSize: 40, lineHeight: 1.2 }}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {!loading && !error && contacts.length === 0 && (
          <p style={{ color: 'red' }}>
            Sorry, no contacts found. Please add a contact to your phonebook.
          </p>
        )}
        {loading && <Loader />}
        <ContactList />
      </div>
    </div>
  );
};
export default ContactsPage;
