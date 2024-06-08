import { getAllContacts, getContactById } from '../services/contacts.js';

export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found students!',
    data: contacts,
  });
};

// export const getContactByIdController = async (req, res) => {
//   try {
//     const { contactId } = req.params;
//     const contact = await getContactById(contactId);

//     if (!contact) {
//       res.status(404).json({ message: 'Not found!' });
//     } else {
//       res.status(200).json({
//         message: `Successfully found contact with id ${contactId}!`,
//         data: contact,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };
export const getContactByIdController = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      next(new Error('Contact not found'));
      return;
    } else {
      res.status(200).json({
        message: `Successfully found contact with id ${contactId}!`,
        data: contact,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
