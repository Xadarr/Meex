import { NestFactory } from '@nestjs/core';
import { NestApplication } from '@nestjs/core';
import { AppModule } from './app.module';
// import { CorsModule } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);

  app.enableCors(); // This will enable CORS for all origins
  await app.listen(5000);
}
bootstrap();
