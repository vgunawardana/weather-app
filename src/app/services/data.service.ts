import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class DataService {

  constructor(private http: HttpClient) { 

  }

  public getTemp(city:string):Observable <any>{

    return  this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=21351d1a1903dd7a8365b27722a5d610');

    //console.log("Accessing OpenWeatherAPI");
  //  return  this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=21351d1a1903dd7a8365b27722a5d610").map(res=> {
     
  //  });

    // let city1="London";
    // this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=21351d1a1903dd7a8365b27722a5d610").subscribe(data=>{
    // console.log(data);
    
    // });
    

  }
}
