import { HttpClient } from 'aurelia-http-client';
import {inject} from 'aurelia-framework';
import { observable } from 'aurelia-binding';
import { default as config } from '../../config';

@inject(HttpClient)
export class City {
  @observable private name: string = 'Sofia';
  private cities: (string)[] = config.cities;
}
