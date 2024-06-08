import { getAllContacts, getContactById } from '../services/contacts.js';
import createHttpError from 'http-errors';
import { createStudent } from '../services/contacts.js';
export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found students!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (!contact) {
    next(createHttpError(404, 'Not found'));
    return;
  } else {
    res.status(200).json({
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  }
};

export const createContactController = async (req, res) => {
  const student = await createStudent(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a student!`,
    data: student,
  });
};
