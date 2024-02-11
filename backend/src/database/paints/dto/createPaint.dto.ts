import { IsNotEmpty, IsString } from 'class-validator';
import { EPaintType } from '../../../types/paint';


export class CreatePaintDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  picture: File;

  @IsNotEmpty()
  type: EPaintType;
}