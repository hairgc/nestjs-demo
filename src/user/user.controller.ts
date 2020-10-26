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

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);;
  }
}
