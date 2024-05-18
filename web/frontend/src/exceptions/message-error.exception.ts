import { AxiosError } from 'axios';
import { ErrorResponse } from '../models/auth/error.model';
import { errorNotification } from '../components/shared/notifications/notification.provider';

export const handleMessageError = ({ response }: AxiosError) => {
  const error: ErrorResponse = response?.data as ErrorResponse;

  const errorMessage = Array.isArray(error.message)
    ? error.message[0]
    : error.message;

  errorNotification(errorMessage);
};
