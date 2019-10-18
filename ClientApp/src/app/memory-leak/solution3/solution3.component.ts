import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService, WeatherForecast } from 'src/app/shared/weather.service';

@Component({
  selector: 'app-solution3',
  template: `<li *ngFor="let weather of weatherForecast$ | async">
    <ul>{{ weather.dateFormatted }}</ul>
    <ul>{{ weather.summary }}</ul>
    <ul>{{ weather.temperatureC }} degree celsius</ul>
    <ul>{{ weather.temperatureF }} fahrenheit</ul>
  </li>`,
  styleUrls: ['./solution3.component.sass']
})
export class Solution3Component implements OnInit {

  weatherForecast$: Observable<WeatherForecast[]>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherForecast$ = this.weatherService.getWeathers();
  }
}
