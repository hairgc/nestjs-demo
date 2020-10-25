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
import { User } from './interface/user.interface';
import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('user')
export class UserController {
  // constructor(private userService: UserService) {}

  // ===========================================================================
  @Inject()
  private userService: UserService;

  // @Post()
  // async create(@Body() createCatDto: CreateUserDto) {
  //   return this.userService.create(createCatDto);
  // }
  //
  // @Get()
  // async findAll(@Query() query: QueryParamsDto): Promise<User[]> {
  //   return this.userService.findAll();
  // }

  // ===========================================================================
  // @Get()
  // @SetMetadata('roles', ['admin'])
  // async findAll(@Query() query: QueryParamsDto): Promise<User[]> {
  //   return this.userService.findAll();
  // }

  // ===========================================================================
  @Get()
  @Roles('admin')
  async findAll(@Query() query: QueryParamsDto): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} user`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} user`;
  }
}
