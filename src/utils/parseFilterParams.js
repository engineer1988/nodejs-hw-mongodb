const parseIsFavourite = (isFavourite) => {
  const isString = typeof isFavourite === 'string';
  if (!isString) return;
  const favourite = (isFavourite) => ['true', 'false'].includes(isFavourite);

  if (favourite(isFavourite)) return isFavourite;
};

const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isContactType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isContactType(contactType)) return contactType;
};

export const parseFilterParams = (query) => {
  const { isFavourite, type } = query;

  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const parsedContactType = parseContactType(type);

  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedContactType,
  };
};
