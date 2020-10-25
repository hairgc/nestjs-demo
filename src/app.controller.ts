import {
  Body,
  Controller,
  Get,
  Param,
  Query,
  Req,
  Headers,
  Post,
  HttpCode,
  Header,
  HttpStatus,
  Res,
  HttpException,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { ForbiddenException } from './common/exception/forbidden.exception';
import { ForbiddenExceptionFilter } from './common/filters/forbidden-exception.filter';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { Observable, of } from 'rxjs';
import { User } from './common/decorators/user.decorator';
import { CreateUserDto } from './user/dto';

@Controller()
// @Controller({ host: 'admin.xxx.com' })
// @UseFilters(HttpExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // ===========================================================================

  // @Get(':id')
  // getHello(@Req() request: Request): string {
  //   console.log(request.params)
  //   console.log(request.query)
  //   console.log(request.body)
  //   console.log(request.headers)
  //   return this.appService.getHello();
  // }

  // ===========================================================================

  // req.query / req.query[key];req.body / req.body[key];req.headers / req.headers[name]
  // @Get(':id/:userId')
  // getHello(
  //   @Param('id') id: number,
  //   @Param('userId') userId: number,
  //   @Query('name') name: string,
  //   @Body() someDto: any,
  //   @Headers('Content-Type') contentType: string,
  // ): string {
  //   console.log(id);
  //   console.log(userId)
  //   console.log(name);
  //   console.log(someDto);
  //   console.log(contentType);
  //   return this.appService.getHello();
  // }

  // ===========================================================================

  // @Get('abcd')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // ===========================================================================

  // @Post()
  // @HttpCode(204)
  // @Header('customKey','123')
  // async create(){
  //   return '123'
  // }

  // ===========================================================================

  // @Get()
  // async find(@Res() response: Response) {
  //   return response.status(HttpStatus.OK).json([]);
  // }
  // @Post()
  // async create(@Res() response: Response) {
  //   return response.status(HttpStatus.CREATED).send();
  // }

  /** Exception Filters **/
  // ==================================================================
  // @Get()
  // async findAll() {
  //   throw new Error();
  // }

  // ===========================================================================
  // @Get()
  // async findAll() {
  //   throw new HttpException('you has Error', HttpStatus.FORBIDDEN);
  // }

  // ===========================================================================
  // @Get()
  // async findAll() {
  //   throw new HttpException(
  //     { code: HttpStatus.FORBIDDEN, message: 'hhh', timestamp: new Date() },
  //     HttpStatus.FORBIDDEN,
  //   );
  // }

  // ===========================================================================
  // @Get()
  // @UseFilters(HttpExceptionFilter)
  // @UseFilters(ForbiddenExceptionFilter)
  // async findAll() {
  //   throw new ForbiddenException();
  // }

  /** custom decorator*/
  // ===========================================================================
  @Get()
  getHello(@User() user: CreateUserDto): string {
    console.log(user);
    return this.appService.getHello();
  }

  // ===========================================================================
  // @Get()
  // getHello(@User() user: any): string {
  //   console.log(user);
  //   return this.appService.getHello();
  // }
}
