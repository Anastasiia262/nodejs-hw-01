import { readContacts, writeContacts } from '../utils/contactsUtils.js';  

export const removeLastContact = async () => {
  const contactsArray = await readContacts();  
  contactsArray.pop();
  await writeContacts(contactsArray);  
};

removeLastContact();
