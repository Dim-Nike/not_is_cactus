import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";

import { AppController } from './app.controller';
import { AppService } from './app.service';


import { DatabaseConfig } from "./database.config";
import { UserModule } from './user/user.module';

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
          envFilePath:'../.env'
      }),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => {
              return {
                  type: 'postgres' as 'postgres',
                  username: configService.get<'string'>('POSTGRES_USER'),
                  password: configService.get<'string'>('POSTGRES_PASSWORD'),
                  database: configService.get<'string'>('POSTGRES_DB'),
                  port: configService.get('POSTGRES_PORT'),
                  entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
                  synchronize: true,
                  autoLoadEntities: true,
                  logging: true
          } as TypeOrmModuleOptions;
          },
          useClass: DatabaseConfig
      }),
      UserModule
  ],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}
