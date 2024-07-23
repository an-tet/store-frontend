import { SxProps, Theme } from '@mui/material';
import { blueTheme } from '../../theme/blueTheme';

export const containerListStyles: SxProps<Theme> = (
  theme: Theme = blueTheme
) => {
  const { breakpoints } = theme;
  return {
    m: '0 auto 10px',
    [breakpoints.up('md')]: {
      width: '80%',
    },
    [breakpoints.down('md')]: {
      width: '100%',
    },
  };
};

export const buttonContainerListStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-end',
};

export const buttonListStyles: SxProps<Theme> = { backgroundColor: 'primary' };

export const containerFormStyles: SxProps<Theme> = () => {
  return { display: 'flex', justifyContent: 'center' };
};

export const formStyles: SxProps<Theme> = {
  width: { sm: '70vw', md: '50vw' },
};
