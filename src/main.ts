import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }

// =============================================================================
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(logger)

  await app.listen(3000);
}

// =============================================================================
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//
//   app.useGlobalFilters(new HttpExceptionFilter())
//
//   await app.listen(3000);
// }

bootstrap();
