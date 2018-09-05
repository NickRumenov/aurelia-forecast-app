import { observable } from 'aurelia-binding';
import {BindingEngine, inject} from 'aurelia-framework';
import {HttpClient} from "aurelia-http-client";
import { default as config } from '../../config';
import { createUrl } from '../../utils';

export class Weather {
  static inject = [BindingEngine, HttpClient];
  @observable private weatherIcon: string = '';
  @observable private conditionText: string = '';
  private subscription: object;
  private celsius: number;
  private feelsLike: string;

  constructor(private bindingEngine: BindingEngine, private http: HttpClient) {}

  created(view){
    let cityModel = view.controllers[0].viewModel;
    this.fetchCurrWeathForCity(cityModel.name);

    this.subscription = this.bindingEngine
      .propertyObserver(cityModel, 'name')
      .subscribe((newValue) => {
        this.handleCityNameChanges(newValue)
    });
  }

  handleCityNameChanges(newCity){
    this.fetchCurrWeathForCity(newCity)
  }

  fetchCurrWeathForCity(newCity){
    let { apixuWeatherUrlParams } = config;
    let url = createUrl(apixuWeatherUrlParams, newCity);

    this.http.get(url)
    .then(success => {
      let response = JSON.parse(success.response);
      let { icon, text }= response.current.condition;
      let { temp_c, feelslike_c } = response.current;
      this.weatherIcon = icon;
      this.conditionText = text;
      this.celsius = temp_c;
      this.feelsLike = feelslike_c;
    });
  }
}
