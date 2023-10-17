import { Module } from '@nestjs/common';
import { PrismaModules } from '../../db/prisma/prisma.module';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';

@Module({
  imports: [PrismaModules],
  controllers: [FormsController],
  providers: [FormsService],
})
export class FormsModule {}
