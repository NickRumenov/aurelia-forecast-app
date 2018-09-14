import {default as config} from '../../config';
import {bindable} from "aurelia-typed-observable-plugin";

export class Selector {
  @bindable cityName: string;
  private areas: (object)[] = config.areas;
}
