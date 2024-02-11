import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Paint, PaintSchema } from './paint.schema';
import { PaintService } from './paint.service';
import { PaintController } from './paint.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Paint.name,
        schema: PaintSchema,
      },
    ]),
  ],
  providers: [PaintService],
  controllers: [PaintController],
})
export class PaintModule {}
