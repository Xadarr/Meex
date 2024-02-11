import { NestFactory } from '@nestjs/core';
import { NestApplication } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
app.useGlobalPipes(new ValidationPipe());
  app.enableCors(); // This will enable CORS for all origins
  await app.listen(5000);
}
bootstrap();
