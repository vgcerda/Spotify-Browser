import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.

  @Input() name:string;
  @Input() percent_number:number;
  @Input() percent_string:string;
  @Input() color:string;
  
  constructor() { }

  ngOnInit() {
  }

}
