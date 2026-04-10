import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HydrationLog } from './hydration.entity';

@Injectable()
export class WellbeingService {
  constructor(
    @InjectRepository(HydrationLog)
    private hydrationRepo: Repository<HydrationLog>,
  ) {}

  async getHydrationLogs(userId: number) {
    return this.hydrationRepo.find({ where: { userId } });
  }
}
