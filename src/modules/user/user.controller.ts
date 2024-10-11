import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TransactionParam } from 'src/common/decorators/transaction-param.decorator';
import { Transaction } from 'sequelize';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ResponseMessage('User created successfully')
  create(@Body() createUserDto: CreateUserDto, @TransactionParam() transaction: Transaction) {
    return this.userService.create(createUserDto, transaction);
  }

  @Get()
  @ResponseMessage('Users')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ResponseMessage('User updated successfully')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateUserDto, @TransactionParam() transaction: Transaction) {
    return this.userService.update(id, body, transaction);
  }
}
