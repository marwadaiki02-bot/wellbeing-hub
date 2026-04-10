import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('hydration_logs')
export class HydrationLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  date: string;

  @Column()
  quantity_ml: number;
}
