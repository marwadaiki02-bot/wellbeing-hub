import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { WellbeingModule } from './wellbeing/wellbeing.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'wellbeing.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // auto create tables
    }),
    AuthModule,
    WellbeingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
