import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosModule } from './livros/livros.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [LivrosModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'NestJS',
    username: 'postgres',
    password: 'maidml22',
    synchronize: true,//funciona como um drop-create
    entities: [__dirname + '/**/*.entity{.js,.ts}'],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
