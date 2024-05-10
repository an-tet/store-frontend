import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true, nullable: false })
  username: string;

  @Column('text', { nullable: false })
  password: string;

  @Column('text', { nullable: false })
  documentType: string;

  @Column('text', { unique: true, nullable: false })
  dni: string;

  @Column('text', { nullable: false })
  fullName: string;

  @Column('text', { nullable: false })
  email: string;

  @Column('date', { nullable: false })
  birthday: string;

  @Column('text', { nullable: false })
  phone: string;

  @Column('text', { nullable: true })
  shirtSize: string;

  @Column('bool', { nullable: false, default: true })
  status: boolean;

  @Column('text', { array: true, nullable: true, default: ['user'] })
  roles: string[];
}
