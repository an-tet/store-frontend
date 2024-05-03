import { GridRowSpacingParams } from '@mui/x-data-grid';
import { useCallback } from 'react';

export const RowSpacing = () =>
  useCallback((params: GridRowSpacingParams) => {
    return {
      top: params.isFirstVisible ? 0 : 5,
      bottom: params.isLastVisible ? 0 : 5,
    };
  }, []);
