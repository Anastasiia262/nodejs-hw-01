import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts, writeContacts } from '../utils/contactsUtils.js';  

const generateContacts = async (number) => {
  const contactsArray = await readContacts();  
  for (let i = 0; i < number; i++) {
    const faker = createFakeContact();
    contactsArray.push(faker);
  }
  await writeContacts(contactsArray); 
};

generateContacts(5);


//  npm run generate