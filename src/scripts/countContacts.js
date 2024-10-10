import { readContacts } from '../utils/contactsUtils.js';  

export const countContacts = async () => {
  const contactsArray = await readContacts();  
  return contactsArray.length;
};

console.log(await countContacts());


//  npm run count