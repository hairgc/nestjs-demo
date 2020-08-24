
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { ForbiddenException } from '../exception/forbidden.exception';

@Catch(ForbiddenException) // 这里可指定某一个Exception类
export class ForbiddenExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    console.log('403')

    let customMessage;
    if (typeof exception.getResponse() === 'string') {
      customMessage = { message: exception.getResponse() };
    } else {
      customMessage = exception.getResponse();
    }

    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      exception: 'forbidden',
      ...customMessage,
    });
  }
}
