import { Contact } from '../db/contact.js';

export const getAllContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};

export const createStudent = async (payload) => {
  const student = await Contact.create(payload);
  return student;
};
