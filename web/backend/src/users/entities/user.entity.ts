import { ValidRoles } from 'src/auth/enum/valid-roles';
import { Product } from 'src/products/entities/product.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false })
  email: string;

  @Column('text', { nullable: false, select: false })
  password: string;

  @Column('text', { nullable: false })
  documentType: string;

  @Column('text', { unique: true, nullable: false })
  dni: string;

  @Column('text', { nullable: false })
  fullName: string;

  @Column('date', { nullable: false })
  birthday: string;

  @Column('text', { nullable: false })
  phone: string;

  @Column('text', { nullable: true })
  shirtSize: string;

  @Column('bool', { nullable: false, default: true })
  status: boolean;

  @Column('text', { nullable: true, default: ValidRoles })
  role: string;

  @OneToMany(() => Product, (product) => product.user)
  product: Product;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
    this.fullName = this.fullName.toLowerCase();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
