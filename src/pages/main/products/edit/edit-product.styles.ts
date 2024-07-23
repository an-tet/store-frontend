import { SxProps, Theme } from '@mui/material';

export const containerFormStyles: SxProps<Theme> = () => {
  return { display: 'flex', justifyContent: 'center' };
};

export const formStyles: SxProps<Theme> = {
  width: { sm: '70vw', md: '50vw' },
};
