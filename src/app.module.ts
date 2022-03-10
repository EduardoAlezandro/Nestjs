import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EmpresaModule } from './empresa/empresa.module';
@Module({
  controllers: [AppController, ],
  providers: [AppService, ],
  imports:[
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
    type: "postgres",
    host: "ec2-52-204-196-4.compute-1.amazonaws.com",
    port: 5432,
    username: "gzicqmuxkqrbey",
    password: "e564bbdb20294ac47bed91358cf5937456bfc2ff2072f7ce8b238c5858b6a199",
    database: "d16fi959j3kkin",
    autoLoadEntities: true,
   extra: {
      ssl: {
        rejectUnauthorized: false,
      }
    },
   synchronize: true,
   logging: false,
    }),
    EmpresaModule,
  ]
})
export class AppModule {}


