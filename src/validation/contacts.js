import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().trim().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().email(),
  isFavourite: Joi.string().valid('true', 'false').required(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
});
