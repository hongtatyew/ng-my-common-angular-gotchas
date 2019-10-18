import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/shared/weather.service';

@Component({
  selector: 'app-solution4',
  templateUrl: './solution4.component.html',
  styleUrls: ['./solution4.component.sass']
})
export class Solution4Component implements OnInit, OnDestroy {
  subscriptions: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.subscriptions.add(this.weatherService.getWeathers().subscribe(x => {
      console.log(x);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
