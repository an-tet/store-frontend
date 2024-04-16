import { SxProps, Theme } from '@mui/material/styles';
import { blueTheme } from '../../../theme/blueTheme';

export const tableStyles: SxProps<Theme> = (theme: Theme = blueTheme) => {
  const { breakpoints } = theme;
  return {
    maxHeight: 800,
    [breakpoints.up('sm')]: {
      width: '80%',
    },
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  };
};

export const searchTableStyles: SxProps<Theme> = (theme: Theme = blueTheme) => {
  const { breakpoints } = theme;
  return {
    mt: 2,
    mb: 2,
    p: '2px 4px',
    [breakpoints.up('sm')]: {
      width: '50%',
    },
    [breakpoints.down('sm')]: {
      width: '100%',
    },
    display: 'flex',
  };
};
