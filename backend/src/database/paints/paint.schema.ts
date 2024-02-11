import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { EPaintType } from '../../types/paint';

@Schema()
export class Paint {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  price?: number;

  @Prop({ required: true })
  picture: File;

  @Prop({ required: true, enum: EPaintType })
  type: EPaintType;
}

export const PaintSchema = SchemaFactory.createForClass(Paint);
