import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from 'src/app/shared/weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-solution1',
  templateUrl: './solution1.component.html',
  styleUrls: ['./solution1.component.sass']
})
export class Solution1Component implements OnInit, OnDestroy {
  weather$: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather$ = this.weatherService.getWeathers().subscribe(x => {
      console.log(x);
    });
  }

  ngOnDestroy() {
    this.weather$.unsubscribe();
  }
}
