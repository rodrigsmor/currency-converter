import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const Language = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const acceptLanguageHeader = request.headers['accept-language'];
    const langQuery = request.query.lang;

    return langQuery || acceptLanguageHeader || 'en';
  },
);
