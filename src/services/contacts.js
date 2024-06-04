import { Contact } from '../db/contact.js';

export const getAllStudents = async () => {
  const contacts = await Contact.find();
  return contacts;
};

export const getStudentById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};
