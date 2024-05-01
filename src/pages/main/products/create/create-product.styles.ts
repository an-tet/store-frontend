import { SxProps, Theme } from '@mui/material';
import { CSSProperties } from 'react';

export const containerFormStyles: SxProps<Theme> = () => {
  return { display: 'flex', justifyContent: 'center' };
};

export const formStyles: CSSProperties = { width: '70vw' };
