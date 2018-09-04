import { observable } from 'aurelia-binding';
import { default as config } from '../../config'

export class City {
  @observable name = 'Sofia';
  private cities: (string)[];

  constructor(props) {
    this.cities = config.cities;
  }

  nameChanged(newValue, oldValue) {
    console.log('New name - ', newValue);
  }
}
