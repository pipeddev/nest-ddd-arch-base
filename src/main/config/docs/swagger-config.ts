import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const swaggerConfig = (app: NestExpressApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('Arch DDD Nestjs')
    .setDescription('Arch DDD Nestjs API description')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
}