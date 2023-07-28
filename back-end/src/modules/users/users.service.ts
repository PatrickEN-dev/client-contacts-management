import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from 'src/modules/users/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private UserRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.UserRepository.create(createUserDto);
  }

  findAll() {
    return this.UserRepository.findAll();
  }

  findByEmail(email: string) {
    const userEmail = this.UserRepository.findByEmail(email);
    if (!userEmail) throw new NotFoundException('User not found');
    return userEmail;
  }

  findOne(id: number) {
    const findUser = this.UserRepository.findone(Number(id));
    if (!findUser) throw new NotFoundException('User not found');

    return findUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const findUser = this.UserRepository.findone(Number(id));
    if (!findUser) throw new NotFoundException('User not found');
    return this.UserRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    const findUser = this.UserRepository.findone(Number(id));
    if (!findUser) throw new NotFoundException('User not found');
    return this.UserRepository.delete(id);
  }
}
