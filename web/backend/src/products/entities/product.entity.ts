import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('text')
  detail: string;

  @Column('float', {
    default: 0,
  })
  price: number;

  @Column('int', {
    default: 0,
  })
  stock: number;

  @Column('bool', {
    default: true,
  })
  status: boolean;

  @Column('text', {
    nullable: true,
  })
  imageUrl: string;

  @ManyToOne(() => User, (user) => user.product, { eager: true })
  user: User;
}
