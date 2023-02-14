import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sessionMiddleware } from './config/sessionMiddleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });
  app.use(sessionMiddleware);
  await app.listen(3000);
}
bootstrap();
