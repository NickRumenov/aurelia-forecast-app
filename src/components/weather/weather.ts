import {observable} from 'aurelia-binding';
import {BindingEngine, inject} from 'aurelia-framework';
import {HttpClient} from "aurelia-http-client";
import {bindable} from "aurelia-typed-observable-plugin";
import {default as config} from '../../config';
import {createUrl} from '../../utils';

@inject(BindingEngine, HttpClient)
export class Weather {
  @bindable public cityName: string;
  @observable private weatherIcon: string = '';
  @observable private conditionText: string = '';
  private subscription: object;
  private celsius: number;
  private feelsLike: string;

  constructor(private bindingEngine: BindingEngine, private http: HttpClient) {
    this.subscription = this.bindingEngine
      .propertyObserver(this, 'cityName')
      .subscribe((selectedCity) => {
        this.handleCityNameChanges(selectedCity)
      });
  }

  handleCityNameChanges(selectedCity) {
    this.fetchCurrWeathForCity(selectedCity).then(currentWeather=>{
      let {icon, text} = currentWeather['current'].condition;
      let {temp_c, feelslike_c} = currentWeather['current'];
      this.weatherIcon = icon;
      this.conditionText = text;
      this.celsius = temp_c;
      this.feelsLike = feelslike_c;
    })
  }

  fetchCurrWeathForCity(selectedCity) {
    let {apixuWeatherUrlParams} = config;
    let url = createUrl(apixuWeatherUrlParams, selectedCity);

    let promise = new Promise((resolve, reject) => {
      this.http.get(url)
        .then(success => {
          let response = JSON.parse(success.response);
          resolve(response);
        });
    });
    return promise;
  }
}
