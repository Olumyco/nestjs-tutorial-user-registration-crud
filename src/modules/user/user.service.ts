import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
import { Op, Transaction } from 'sequelize';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(data: CreateUserDto, transaction: Transaction) {
    const { email, phoneNumber } = data;

    const user = await this.userRepository.findOne({ [Op.or]: [{ email }, { phoneNumber }] });

    if (user) throw new ConflictException('Email or phone number already exist');

    return await this.userRepository.create(data, transaction);
  }

  async findAll() {
    return await this.userRepository.findAll()
  }

  async findOne(id: string) {
    return await this.userRepository.findById(id)
  }

  async update(id: string, data: UpdateUserDto, transaction: Transaction) {
    const user = await this.userRepository.findById(id);

    if (!user) throw new BadRequestException('Record not found');

    return await this.userRepository.update({ id }, data, transaction);
  }
}
