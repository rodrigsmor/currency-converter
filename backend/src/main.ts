import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Currency Converter | Documentation')
    .setDescription(
      'This is the documentation for a currency converter that supports over 100 currencies and includes internationalization for both Portuguese and English languages.',
    )
    .setVersion('1.0')
    .addTag('Currency Converter')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  app.enableCors();
  app.use(json({ limit: '100mb' }));
  app.use(urlencoded({ limit: '100mb', extended: true }));

  await app.listen(process.env.BACKEND_HOST ?? 3000);
}
bootstrap();
