import { observable } from 'aurelia-binding';
import { default as config } from '../../config';

export class City {
  @observable private name: string = 'Sofia';
  private cities: (string)[] = config.cities;
}
