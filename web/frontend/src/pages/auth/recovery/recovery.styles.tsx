import { SxProps, Theme } from '@mui/material';
import { blueTheme } from '../../../theme/blueTheme';

const containerLogin = ({ breakpoints }: Theme = blueTheme): SxProps<Theme> => {
  return {
    [breakpoints.only('sm')]: {
      justifyContent: 'center',
    },
  };
};
export const RecoveryStyles = {
  containerLogin,
};
