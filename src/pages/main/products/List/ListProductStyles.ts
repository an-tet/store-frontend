import { SxProps, Theme } from '@mui/material';
import { blueTheme } from '../../../../theme/blueTheme';

export const containerStyles: SxProps<Theme> = (theme: Theme = blueTheme) => {
  const { breakpoints } = theme;
  return {
    mt: 5,
    [breakpoints.up('md')]: {
      width: '80%',
    },
    [breakpoints.down('md')]: {
      width: '100%',
    },
  };
};
