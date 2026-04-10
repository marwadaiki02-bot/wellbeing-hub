import { Module } from '@nestjs/common';
import { WellbeingService } from './wellbeing.service';
import { WellbeingController } from './wellbeing.controller';

@Module({
  providers: [WellbeingService],
  controllers: [WellbeingController]
})
export class WellbeingModule {}
