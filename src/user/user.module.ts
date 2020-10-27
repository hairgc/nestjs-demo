import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserSubscriber } from './subscriber/user.subscriber';
import { Account } from './entity/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserModule, TypeOrmModule],
})
export class UserModule {}

// @Module({
//   imports: [TypeOrmModule.forFeature([User])],
//   controllers: [UserController],
//   providers: [UserService, UserSubscriber],
//   exports: [UserModule, TypeOrmModule],
// })
// export class UserModule {}

// ================================================================
// @Module({
//   imports: [
//     TypeOrmModule.forFeature([User]),
//     TypeOrmModule.forFeature([Account], 'aliyun'),
//   ],
//   controllers: [UserController],
//   providers: [UserService],
//   exports: [UserModule, TypeOrmModule],
// })
// export class UserModule {}
