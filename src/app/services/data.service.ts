import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }

  getTemp(city:string) : void{
    //console.log("Accessing OpenWeatherAPI");
    this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=21351d1a1903dd7a8365b27722a5d610").subscribe(data => {
      console.log(data);
    });
    // let city1="London";
    // this.http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=21351d1a1903dd7a8365b27722a5d610").subscribe(data=>{
    // console.log(data);
    
    // });
    

  }
}
