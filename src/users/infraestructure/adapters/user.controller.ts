import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Inject,
  Patch,
} from '@nestjs/common'
import { UserServiceInterface } from '../../application/ports/inbound/user.service.interface'
import { User } from '../../domain/models/user.entity'
import { CreateUserDto } from 'src/users/application/dto/create-user.dto'
import { UpdateUserDto } from 'src/users/application/dto/update-user.dto'

@Controller('users')
export class UserController {
  constructor(
    @Inject('UserServiceInterface')
    private readonly userService: UserServiceInterface,
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.getUsers()
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(+id)
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.createUser(user)
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(+id, user)
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(+id)
  }
}
