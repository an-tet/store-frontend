import { HttpException, HttpStatus, Logger } from '@nestjs/common';

// TODO: finish this class
export class DatabaseException {
  private logger = new Logger('DatabaseException');

  handleExceptions(error: any): never {
    this.logger.error(error);

    if (error.code === '23505')
      throw new HttpException('customer already exists', HttpStatus.CONFLICT);

    throw new Error('Error no controlado, contacte con el equipo técnico');
  }
}
