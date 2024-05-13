import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    const user = req.user;

    if (!user)
      throw new InternalServerErrorException(
        'No se encontró sesión para el usuario solicitado',
      );

    return !data ? user : user[data];
  },
);
