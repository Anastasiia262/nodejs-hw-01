import { writeContacts } from '../utils/contactsUtils.js';  

export const removeAllContacts = async () => {
  await writeContacts([]);  
};

removeAllContacts();
