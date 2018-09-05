import { observable } from 'aurelia-binding';
import { default as config } from '../../config';
import {BindingEngine, inject} from 'aurelia-framework';
import { createUrl } from '../../utils';
import {HttpClient} from "aurelia-http-client";

export class Weather {
  static inject = [BindingEngine, HttpClient];
  @observable weatherIcon: string = '//cdn.apixu.com/weather/64x64/day/116.png';
  subscription;
  bindingEngine;

  constructor(bindingEngine, private http: HttpClient) {
    this.bindingEngine = bindingEngine;
  }

  created(view){
    let cityModel = view.controllers[0].viewModel;

    this.subscription = this.bindingEngine
      .propertyObserver(cityModel, 'name')
      .subscribe((newValue) => {
        this.handleCityNameChanges(newValue)
    });
  }

  handleCityNameChanges(newCity){
    this.fetchCityData(newCity)
  }

  fetchCityData(newCity){
    let { apixuUrlParams } = config;
    let url = createUrl(apixuUrlParams, newCity);

    this.http.get(url)
    .then(success => {
      console.log(success)
    });
    console.log('New city - ', newCity);
  }
}
