import { Router } from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.use('/:contactId', isValidId);

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIdController));

router.post(
  '',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  validateBody(createContactSchema),
  ctrlWrapper(patchContactController),
);

router.delete('/:contactId', ctrlWrapper(deleteContactController));

export default router;
