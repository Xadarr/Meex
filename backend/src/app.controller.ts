import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';


@Controller()
export class AppController {
  // @ts-ignore
  constructor(
    private readonly appService: AppService,
  ) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/api/health')
  checkHealth(): string {
    return `{"status": "OK"}`;
  }

  @Post('/api/submitForm')
  async submitForm(@Body() data: any): Promise<any> {
    console.log(data);
    try {
      // const paint = new this.paintModel(data);
      // await paint.save();
      // return { message: 'Paint created successfully', paint };
      return { data: data}
    } catch (error) {
      console.error('Error creating paint:', error);
      return { message: 'Error creating paint', error };
    }

  }
}
