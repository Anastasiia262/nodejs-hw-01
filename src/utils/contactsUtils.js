import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises'; 

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8'); 
    const contacts = JSON.parse(data); 
    return contacts; 
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error; 
  }
};

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);  
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log(`Contacts have been written to ${PATH_DB}`);
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error; 
  }
};
