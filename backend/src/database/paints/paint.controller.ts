import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { PaintService } from './paint.service';
import { CreatePaintDto } from './dto/createPaint.dto';



@Controller('paint')
export class PaintController{
constructor(private paintService: PaintService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  createPaint(@Body() createPaintDto: CreatePaintDto){
console.log('Received data:', createPaintDto);
return this.paintService.createPaint(createPaintDto);
  }
}