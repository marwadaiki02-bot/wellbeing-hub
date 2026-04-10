import { Controller, Get, Query } from '@nestjs/common';
import { WellbeingService } from './wellbeing.service';

@Controller('wellbeing')
export class WellbeingController {
  constructor(private wellbeingService: WellbeingService) {}

  @Get('hydration')
  async getHydration(@Query('userId') userId: number) {
    return this.wellbeingService.getHydrationLogs(userId);
  }
}
