import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const port = process.env.API_PORT
    ? parseInt(process.env.API_PORT, 10)
    : 3001;

  await app.listen(port);

  console.log(`API service is running on http://localhost:${port}`);
}

bootstrap();
