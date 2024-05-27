import { errorNotification } from '../components/shared/notifications/notification.provider';

export const MessageErrorException = (
  error:
    | string
    | string[] = 'Algo salió mal, por favor contacta al administrador'
) => {
  const errorMessage: string = Array.isArray(error)
    ? (error[0] as string)
    : (error as string);

  errorNotification(errorMessage);
};
