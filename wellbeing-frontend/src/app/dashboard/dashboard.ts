import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WellbeingService } from '../wellbeing/wellbeing';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  hydrationLogs: any[] = [];
  sleepLogs: any[] = [];
  moodLogs: any[] = [];
  activityLogs: any[] = [];

  constructor(private wellbeingService: WellbeingService) {}

  ngOnInit() {
    this.wellbeingService.getHydration(1).subscribe(data => this.hydrationLogs = data);
    this.wellbeingService.getSleep(1).subscribe(data => this.sleepLogs = data);
    this.wellbeingService.getMood(1).subscribe(data => this.moodLogs = data);
    this.wellbeingService.getActivity(1).subscribe(data => this.activityLogs = data);
  }
}