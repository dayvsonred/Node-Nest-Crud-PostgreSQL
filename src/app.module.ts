import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantersEntity } from './models/planters.entity';
import { FarmFieldEntity } from './models/farm-field.entity';
import { CultureTypeEntity } from './models/culture-type.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'toor',
      database: 'agriculture',
      entities: [PlantersEntity, FarmFieldEntity, CultureTypeEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
