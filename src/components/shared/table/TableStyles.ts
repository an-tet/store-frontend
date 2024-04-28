import { SxProps, Theme } from '@mui/material/styles';
import { blueTheme } from '../../../theme/blueTheme';

export const tableStyles: SxProps<Theme> = () => ({
  maxHeight: 800,
});

export const containerStyles: SxProps<Theme> = () => ({
  width: '100%',
});

export const inputStyles: SxProps<Theme> = () => ({
  ml: 1,
  flex: 1,
  width: '80%',
});

export const searchTableStyles: SxProps<Theme> = (theme: Theme = blueTheme) => {
  const { breakpoints } = theme;
  return {
    mt: 2,
    mb: 2,
    p: '2px 4px',
    display: 'flex',
    [breakpoints.up('sm')]: {
      width: '60%',
    },
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  };
};
