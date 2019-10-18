import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  getWeathers(): Observable<WeatherForecast[]> {
    return this.httpClient.get<WeatherForecast[]>(`${this.baseUrl}api/weather`);
  }

  getWeather(date: Date): Observable<WeatherForecast[]> {
    return this.httpClient.get<WeatherForecast[]>(`${this.baseUrl}api/weather`);
  }
}

export class WeatherForecast {
  summary: string;
  temperatureC: number;
  temperatureF: number;
  dateFormatted: Date;
}
