import {default as config} from '../../config';
import {bindable} from "aurelia-typed-observable-plugin";

export class City {
  @bindable public cityName: string = 'Sofia';
  private cities: (string)[] = config.cities;
}
