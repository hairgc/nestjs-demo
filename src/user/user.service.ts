import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import {
  Connection,
  EntityManager,
  Repository,
  Transaction,
  TransactionManager,
  UpdateResult,
} from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto';
//
// @Injectable()
// export class UserService {
//   constructor(
//     @InjectRepository(User)
//     private usersRepository: Repository<User>,
//   ) {}
//
//   findAll(): Promise<User[]> {
//     return this.usersRepository.find();
//   }
//
//   findOne(id: string): Promise<User> {
//     return this.usersRepository.findOne(id);
//   }
//
//   async remove(id: string): Promise<void> {
//     await this.usersRepository.delete(id);
//   }
//
//   async save(createUserDto: CreateUserDto): Promise<User> {
//     return this.usersRepository.save(createUserDto);
//   }
//
//   async update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
//     return this.usersRepository.update(id, updateUserDto);
//   }
// }

// export class UserService {
//   constructor(
//     @InjectRepository(User)
//     private usersRepository: Repository<User>,
//     @InjectConnection()
//     private connection: Connection,
//   ) {}
//
//   async createMany(users: User[]) {
//     const queryRunner = this.connection.createQueryRunner();
//
//     await queryRunner.connect();
//     await queryRunner.startTransaction();
//     try {
//       await queryRunner.manager.save(users[0]);
//       await queryRunner.manager.save(users[1]);
//
//       await queryRunner.commitTransaction();
//     } catch (err) {
//       // since we have errors lets rollback the changes we made
//       console.log(err);
//       await queryRunner.rollbackTransaction();
//     } finally {
//       // you need to release a queryRunner which was manually instantiated
//       await queryRunner.release();
//     }
//   }
//
//   // =============================================================================
//
//   // async createMany(users: User[]) {
//   //   await this.connection.transaction('SERIALIZABLE', async manager => {
//   //     await manager.save(users[0]);
//   //     await manager.save(users[1]);
//   //   });
//   // }
//
//   // ===========================================================================
//   // @Transaction({ isolation: 'SERIALIZABLE' })
//   // async createMany(users: User[], manager: EntityManager) {
//   //   manager.create(User, users[0]);
//   //   manager.create(User, users[1]);
//   // }
//
//   findAll(): Promise<User[]> {
//     return this.usersRepository.find();
//   }
//
//   findOne(id: string): Promise<User> {
//     return this.usersRepository.findOne(id);
//   }
//
//   async remove(id: string): Promise<void> {
//     await this.usersRepository.delete(id);
//   }
//
//   async save(createUserDto: CreateUserDto): Promise<User> {
//     return this.usersRepository.save(createUserDto);
//   }
//
//   async update(
//     id: string,
//     updateUserDto: UpdateUserDto,
//   ): Promise<UpdateResult> {
//     return this.usersRepository.update(id, updateUserDto);
//   }
// }
