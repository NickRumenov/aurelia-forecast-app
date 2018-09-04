import { observable } from 'aurelia-binding';
import { default as config } from '../../config';
import { HttpClient } from 'aurelia-http-client';
import {inject} from 'aurelia-framework';
import {createUrl} from '../../utils';

@inject(HttpClient)
export class City {
  @observable private name: string = 'Sofia';
  private cities: (string)[] = config.cities;

  constructor(private http: HttpClient) {
  }

  nameChanged(newCity, oldValue) {
    let { apixuUrlParams } = config;
    let url = createUrl(apixuUrlParams, newCity);

    this.http.get(url)
    .then(response => {
      console.log(response)
    });
    console.log('New city - ', newCity);
  }
}
