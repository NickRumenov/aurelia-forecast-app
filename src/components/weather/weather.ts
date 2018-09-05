import { observable } from 'aurelia-binding';
import { default as config } from '../../config';
import {BindingEngine, inject} from 'aurelia-framework';
import { createUrl } from '../../utils';
import {HttpClient} from "aurelia-http-client";

export class Weather {
  static inject = [BindingEngine, HttpClient];
  @observable private weatherIcon: string = '';
  @observable private conditionText: string = '';
  private subscription: object;
  private bindingEngine: BindingEngine;

  constructor(bindingEngine, private http: HttpClient) {
    this.bindingEngine = bindingEngine;
  }

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
    let { apixuUrlParams } = config;
    let url = createUrl(apixuUrlParams, newCity);

    this.http.get(url)
    .then(success => {
      let response = JSON.parse(success.response);
      let { icon, text }= response.current.condition;
      this.weatherIcon = icon;
      this.conditionText = text;
    });
  }
}
