import { Entity } from 'typeorm';

@Entity()
export class Customer {
  id: string;
  documentType: string;
  dni: string;
  fullName: string;
  email: string;
  birthday: string;
  phone: string;
}
