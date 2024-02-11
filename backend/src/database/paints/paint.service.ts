import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paint } from './paint.schema';
import { CreatePaintDto } from './dto/createPaint.dto';

@Injectable()
export class PaintService {
  constructor(
    @InjectModel(Paint.name) private paintModel: Model<Paint>
  ) {
  }

  createPaint(createPaintDto: CreatePaintDto) {
    const createdPaint = new this.paintModel(createPaintDto);
    return createdPaint.save();

  }

}