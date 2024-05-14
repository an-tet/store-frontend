import { enqueueSnackbar } from 'notistack';

export const errorNotification = (message: string) => {
  enqueueSnackbar(message, {
    variant: 'error',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    persist: false,
  });
};

export const successNotification = (message: string) => {
  enqueueSnackbar(message, {
    variant: 'success',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    persist: false,
  });
};
