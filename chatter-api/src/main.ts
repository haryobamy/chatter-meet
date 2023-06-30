import { NestFactory } from '@nestjs/core';
import { json } from 'express';
import cors from 'cors';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(json({ limit: '25mb' }));
  app.enableCors();
  await app.listen(4200);
}
bootstrap();
