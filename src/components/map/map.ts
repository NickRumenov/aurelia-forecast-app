import {bindable} from "aurelia-typed-observable-plugin";
import {default as config} from "../../config";

export class Map {
  areas: (object)[] = config.areas;
  @bindable cityName: string;

  onMapClick({name}){
    this.cityName = name;
  }
}
