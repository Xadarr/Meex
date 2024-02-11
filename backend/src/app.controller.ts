import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

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
    console.log('Received data:', data);
    try {
      console.log('Connecting to MongoDB...');
    } catch (error) {
      console.error('Error submitting form:', error);
      return error;
    }
  }


}
