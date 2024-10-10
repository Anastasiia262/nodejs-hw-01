import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts, writeContacts } from '../utils/contactsUtils.js';  

export const addOneContact = async () => {
  const contactsArray = await readContacts(); 
  const faker = createFakeContact();
  contactsArray.push(faker);
  await writeContacts(contactsArray);  
};

addOneContact();


//  npm run add-one