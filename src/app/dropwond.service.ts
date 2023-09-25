import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as countrycitystatejson from 'countrycitystatejson';

@Injectable({
  providedIn: 'root'
})
export class DropwondService {

  url='https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
  url2='http://localhost:3000/data'
  constructor(private http : HttpClient) { }

  get():Observable<any>{
    return this.http.get<any>(this.url2)
  }

  postServic(data:any):Observable<any>{
    return this.http.post<any>(this.url2,data)
  }

  getID(id:any):Observable<any>{
    return this.http.get<any>(this.url2+'/'+id)
  }

  getservice():Observable<any>{
    return this.http.get<any>(this.url2)
  }

  private countryData = countrycitystatejson;

  getCountries() {
    return this.countryData.getCountries();
  }

  getStatesByCountry(name: string) {
    return this.countryData.getStatesByShort(name);
  }

  getCitiesByState(country: any, state: string) {
    return this.countryData.getCities(country, state);
  }
}

