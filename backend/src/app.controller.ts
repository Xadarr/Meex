import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/api/health')
  checkHealth(): string {
    return `{"status": "OK"}`;
  }

  @Post('/api/submitForm')
  submitForm(@Body() data: any): string {
    console.log(data);
    return `{"status": "OK"}`;
  }
}
