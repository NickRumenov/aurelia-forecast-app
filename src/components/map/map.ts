import {default as mapConfig} from "./config";
import {bindable} from "aurelia-typed-observable-plugin";

export class Map {
  areas: object[] = mapConfig.areas;
  @bindable cityName: string;

  onMapClick(area){
    this.cityName = area.name;
  }

  onMapHover(){
    console.log('hov')
  }
}
