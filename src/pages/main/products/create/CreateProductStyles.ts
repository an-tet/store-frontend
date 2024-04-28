import { SxProps, Theme } from '@mui/material';
// import { blueTheme } from '../../../../theme/blueTheme';
import { CSSProperties } from 'react';

export const containerFormStyles: SxProps<Theme> = () =>
  // theme: Theme = blueTheme
  {
    // const { breakpoints } = theme;
    return { display: 'flex', justifyContent: 'center' };
  };

export const formStyles: CSSProperties = { width: '70vw' };
