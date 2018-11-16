import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  location : string = "London,uk";

  constructor(private ds:DataService) { 
    
  }

  ngOnInit() {
    this.ds.getTemp(this.location);
  }

}
