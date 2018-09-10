import { HttpClient } from "aurelia-http-client";
import { BindingEngine, inject } from 'aurelia-framework';
import * as moment from 'moment';
import { default as config } from '../../config';
import { createUrl } from '../../utils';

@inject(BindingEngine, HttpClient)
export class Forecast {
  private subscription: object;
  private forecastDays: any[] = [];
  private forecastDaysCount = config.forecast.countOfDays;

  constructor(private bindingEngine: BindingEngine, private http: HttpClient) {}

  created(view){
    let cityModel = view.controllers[0].viewModel;
    this.forecastDays = this.getNextFiveDays();
    this.fetchForecast(cityModel.name);

    this.subscription = this.bindingEngine
      .propertyObserver(cityModel, 'name')
      .subscribe((newValue) => {
        this.handleCityNameChanges(newValue)
      });
  }

  handleCityNameChanges(newCity){
    this.fetchForecast(newCity)
  }

  getNextFiveDays(){
    for (var i = 0; i < this.forecastDaysCount; i++) {
      let day = moment().add(i, 'days');
      this.forecastDays.push(day);
    }
    return this.forecastDays;
  }

  fetchForecast(selectedCity) {
    let {apixuForecastUrlParams} = config;
    let url = createUrl(apixuForecastUrlParams, selectedCity);

    this.http.get(url)
      .then(success => {
        let response = JSON.parse(success.response);

        for (var i = 0; i < this.forecastDaysCount; i++) {
          this.forecastDays[i].forecast = response.forecast.forecastday[i];
        }
    });
  }
}
