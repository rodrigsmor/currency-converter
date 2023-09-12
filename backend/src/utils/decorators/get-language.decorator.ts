import {
  BadRequestException,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';
import { TranslationEnum } from '../enums';

function isLanguageValid(language: string): boolean {
  return Object.values(TranslationEnum).includes(language as TranslationEnum);
}

export const Language = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const acceptLanguageHeader = request.headers['accept-language'];
    const langQuery = request.query.lang;

    const language = langQuery || acceptLanguageHeader || 'en';

    if (!isLanguageValid(language)) {
      throw new BadRequestException(
        'we have no support for the language provided',
      );
    }

    return language;
  },
);
