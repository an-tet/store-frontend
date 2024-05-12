import * as bcrypt from 'bcrypt';

export const encodeSync = (text: string): string => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(text, salt);
};

export const compareSync = (text: string, hash: string): boolean =>
  bcrypt.compareSync(text, hash);
