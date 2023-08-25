import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable dto validation globally
  app.useGlobalPipes(new ValidationPipe());

  // setup cors
  app.enableCors({
    origin: 'http://localhost:3000',
  });

  // setup swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('SAECOM Api')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();
  const swagger = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swagger);

  await app.listen(4000);
}
bootstrap();
