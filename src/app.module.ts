import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from "./database.config";
import { UserModule } from './user/user.module';
import { config } from "./config";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      //    envFilePath:'../.env',
          load: [config]
      }),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => {
              return {
                  type: 'postgres' as 'postgres',
                  username: configService.get<'string'>('DB_USERNAME'),
                  password: configService.get<'string'>('DB_PASSWORD'),
                  port: configService.get('DB_PORT'),
                  entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
                  synchronize: true,
                  autoLoadEntities: true
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
