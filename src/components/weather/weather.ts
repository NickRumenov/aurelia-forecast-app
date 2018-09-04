import { observable } from 'aurelia-binding';
import { default as config } from '../../config'

export class Weather {
  @observable weatherIcon: string = '//cdn.apixu.com/weather/64x64/day/116.png';
  //private cities: (string)[];

  constructor(props) {
    console.log(props)
    //.weatherIcon = '';
    //this.cities = config.cities;
  }

  // nameChanged(newValue, oldValue) {
  //   //console.log('New name - ', newValue);
  // }
}
