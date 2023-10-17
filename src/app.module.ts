import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './modules/forms/forms.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule.forRoot(), FormsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
