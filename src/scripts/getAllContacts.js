import { readContacts } from '../utils/contactsUtils.js';  

export const getAllContacts = async () => {
  const contactsArray = await readContacts();  
  return contactsArray;
};

console.log(await getAllContacts());
