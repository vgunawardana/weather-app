import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  location : string ;
  temp : number ;
  location_temp : string;
  outputDivVisible: boolean;

  constructor(private ds:DataService) { 
    
  }

  ngOnInit() {
    // not in here
    // this.ds.getTemp(this.location).subscribe(data => {
    //   console.log(data);
    //   this.temp = data.main.temp;

    // });
  }

  onClick() {
    this.ds.getTemp(this.location).subscribe(data => {
      console.log(data);
      this.temp = data.main.temp;
      this.outputDivVisible = true;
      this.location_temp = this.location;
      this.location = " ";
    });
   }

   onFocus(){
     this.outputDivVisible = false;
   }

}
