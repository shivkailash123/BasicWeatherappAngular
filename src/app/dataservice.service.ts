import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private dataBaseUrl: string;
  constructor(private httpClient: HttpClient) {
   // this.dataBaseUrl = 'http://api.weatherstack.com/current ? access_key=1e68a0d11d87a668b3b0fa973e0effd8 & query=New York'
   this.dataBaseUrl = 'http://api.weatherstack.com/current?access_key=1e68a0d11d87a668b3b0fa973e0effd8&query=' 
  
  }

   getdata(city:string): Observable<any>{
    return this.httpClient.get<any>(this.dataBaseUrl+city);
   }
}
