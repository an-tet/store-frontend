import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false })
  documentType: string;

  @Column('text', { unique: true, nullable: false })
  dni: string;

  @Column('text', { nullable: false })
  fullName: string;

  @Column('text', { unique: true, nullable: true })
  email: string;

  @Column('date', { nullable: true })
  birthday: string;

  @Column('text', { nullable: true, unique: true })
  phone: string;

  @BeforeInsert()
  normalizeFullName() {
    this.fullName = this.fullName.toLowerCase();
  }
}
