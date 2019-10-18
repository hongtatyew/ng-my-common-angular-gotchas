import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from 'src/app/shared/weather.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-solution2',
  templateUrl: './solution2.component.html',
  styleUrls: ['./solution2.component.sass']
})
export class Solution2Component implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService
      .getWeathers()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(x => {
        console.log(x);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
