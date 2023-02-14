import { Exclude, Expose, instanceToPlain } from 'class-transformer';
import { UserResponse } from 'src/models/response/UserResponse';
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('users')
export class User extends AbstractEntity {
  @Column({ unique: true })
  @Expose({ groups: ['user'] })
  email!: string;

  @Column()
  username!: string;

  @Column()
  @Exclude()
  password!: string;

  toJSON(): UserResponse {
    return <UserResponse>instanceToPlain(this, { groups: ['user'] });
  }
}
