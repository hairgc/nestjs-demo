import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Inject,
  SetMetadata,
} from '@nestjs/common';

import { CreateUserDto, UpdateUserDto, QueryParamsDto } from './dto';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { EntityManager, TransactionManager } from 'typeorm';

@Controller('user')
export class UserController {
  @Inject()
  private userService: UserService;

  @Get()
  async findAll(@Query() query: QueryParamsDto): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  save(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.save(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Post('/create-many')
  saveMany(): void {
    const users: User[] = [
      new User(null, '11', '22', false),
      new User(null, '11', '22', false),
    ];
    this.userService.createMany(users).then(r => {});
  }
}
