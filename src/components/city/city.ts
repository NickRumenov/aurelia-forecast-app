import { observable } from 'aurelia-binding';
import { default as config } from '../../config';
import { HttpClient } from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class City {
  @observable private name: string = 'Sofia';
  private cities: (string)[] = config.cities;
}
