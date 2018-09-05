import * as moment from 'moment';
import { default as config } from '../../config';

export class Forecast {
  private forecastDays: any[] = [];
  private forecastDaysCount = config.forecast.countOfDays;

  constructor(props) {
  }
  
  created(){
    this.forecastDays = this.getNextFiveDays();
  }

  getNextFiveDays(){
    for (var i = 0; i < this.forecastDaysCount; i++) {
      let day = moment().add(i, 'days');
      this.forecastDays.push(day);
    }
    return this.forecastDays;
  }
}
