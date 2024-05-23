import { User } from '../domain/entities/user.entity';

export interface UserApplication {
  findById(id: number): Promise<User>;
  findAll(): Promise<User[]>;
  update(user: User): Promise<User>;
  create(user: User): Promise<User>;
  delete(id: number): Promise<boolean>;
}
