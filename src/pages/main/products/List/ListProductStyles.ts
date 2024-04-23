import { SxProps, Theme } from '@mui/material';
import { blueTheme } from '../../../../theme/blueTheme';

export const containerStyles: SxProps<Theme> = (theme: Theme = blueTheme) => {
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

export const buttonContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-end',
};

export const buttonStyles: SxProps<Theme> = { backgroundColor: 'primary' };
