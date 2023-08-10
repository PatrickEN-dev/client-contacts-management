import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { AuthRequest } from './authRequest';

export const CurrentClient = createParamDecorator(
  (data: unknown, context: ExecutionContext): any => {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    const userData = request.user;
    return userData;
  },
);
