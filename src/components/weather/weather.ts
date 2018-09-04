import { observable } from 'aurelia-binding';
import { default as config } from '../../config';
import {BindingEngine, inject} from 'aurelia-framework';

export class Weather {
  static inject = [BindingEngine];
  @observable weatherIcon: string = '//cdn.apixu.com/weather/64x64/day/116.png';
  subscription;
  bindingEngine;

  constructor(bindingEngine) {
    this.bindingEngine = bindingEngine;
  }

  created(view){
    let cityModel = view.controllers[0].viewModel;

    this.subscription = this.bindingEngine
      .propertyObserver(cityModel, 'name')
      .subscribe((newValue) => {
        this.objectValueChanged(newValue)
    });

  }

  objectValueChanged(newCity){
    console.log(newCity)
  }
}
