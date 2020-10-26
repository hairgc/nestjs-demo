import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ForbiddenExceptionFilter } from './common/filters/forbidden-exception.filter';
import { AuthGuard } from './common/guards/auth.guard';
import { RoleGuard } from './common/guards/role.guard';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './user/entity/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
  ],
  exports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

//==============================================================================
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer): any {
//     consumer.apply(LoggerMiddleware).forRoutes('user');
//   }
// }

//==============================================================================
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer): any {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes({ path: 'user', method: RequestMethod.GET });
//   }
// }

//==============================================================================
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer): any {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes({ path: 'ab*cd', method: RequestMethod.GET });
//   }
// }

//==============================================================================
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer): any {
//     consumer
//       .apply(xxxMiddleWare, LoggerMiddleware)
//       .exclude(
//         { path: 'user', method: RequestMethod.GET },
//         { path: 'user', method: RequestMethod.POST },
//         'user/(.*)',
//       )
//       .forRoutes(UserController);
//   }
// }

/** Exception filters */
// =============================================================================
// @Module({
//   imports: [UserModule],
//   controllers: [AppController],
//   providers: [
//     AppService,
//     {
//       provide: APP_FILTER,
//       useClass: HttpExceptionFilter,
//     },
//   ],
// })
// export class AppModule {}

// =============================================================================
// @Module({
//   imports: [UserModule],
//   controllers: [AppController],
//   providers: [
//     AppService,
//     {
//       provide: APP_FILTER,
//       useClass: HttpExceptionFilter,
//     },
//     {
//       provide: APP_FILTER,
//       useClass: ForbiddenExceptionFilter,
//     },
//   ],
// })
// export class AppModule {}

/** Guards */
// =============================================================================
// @Module({
//   imports: [UserModule],
//   controllers: [AppController],
//   providers: [
//     AppService,
//     {
//       provide: APP_FILTER,
//       useClass: HttpExceptionFilter,
//     },
//     {
//       provide: APP_FILTER,
//       useClass: ForbiddenExceptionFilter,
//     },
//     {
//       provide: APP_GUARD,
//       useClass: AuthGuard,
//     },
//   ],
// })
// export class AppModule {}

// =============================================================================
// @Module({
//   imports: [UserModule],
//   controllers: [AppController],
//   providers: [
//     AppService,
//     {
//       provide: APP_FILTER,
//       useClass: HttpExceptionFilter,
//     },
//     {
//       provide: APP_FILTER,
//       useClass: ForbiddenExceptionFilter,
//     },
//     {
//       provide: APP_GUARD,
//       useClass: AuthGuard,
//     },
//     {
//       provide: APP_GUARD,
//       useClass: RoleGuard,
//     },
//   ],
// })
// export class AppModule {}

/** Interceptors */
// =============================================================================
// @Module({
//   imports: [UserModule],
//   controllers: [AppController],
//   providers: [
//     AppService,
//     {
//       provide: APP_FILTER,
//       useClass: HttpExceptionFilter,
//     },
//     {
//       provide: APP_FILTER,
//       useClass: ForbiddenExceptionFilter,
//     },
//     {
//       provide: APP_GUARD,
//       useClass: AuthGuard,
//     },
//     {
//       provide: APP_GUARD,
//       useClass: RoleGuard,
//     },
//     {
//       provide: APP_INTERCEPTOR,
//       useClass: LoggingInterceptor,
//     },
//   ],
// })
// export class AppModule {}

// =============================================================================
// @Module({
//   imports: [UserModule],
//   controllers: [AppController],
//   providers: [
//     AppService,
//     {
//       provide: APP_FILTER,
//       useClass: HttpExceptionFilter,
//     },
//     {
//       provide: APP_FILTER,
//       useClass: ForbiddenExceptionFilter,
//     },
//     {
//       provide: APP_GUARD,
//       useClass: AuthGuard,
//     },
//     {
//       provide: APP_GUARD,
//       useClass: RoleGuard,
//     },
//     {
//       provide: APP_INTERCEPTOR,
//       useClass: LoggingInterceptor,
//     },
//     {
//       provide: APP_INTERCEPTOR,
//       useClass: TransformInterceptor,
//     },
//   ],
// })
// export class AppModule {}
