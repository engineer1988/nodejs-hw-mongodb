const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isContactType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isContactType(contactType)) return contactType;
};

export const parseFilterParams = (query) => {
  const { isFavourite, type } = query;

  const parsedContactType = parseContactType(type);

  return {
    isFavourite,
    contactType: parsedContactType,
  };
};
