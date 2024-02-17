import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Item } from './item.entity';
import { Exclude } from 'class-transformer';
import { UserStatus } from '../auth/user-status.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column()
  status: UserStatus;

  // @OneToMany(() => Item, (item) => item.user)
  // items: Item[];
}
