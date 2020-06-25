import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { current } from '../current';
import { location } from '../location';

@Component({
  selector: 'app-weatherdata',
  templateUrl: './weatherdata.component.html',
  styleUrls: ['./weatherdata.component.css']
})
export class WeatherdataComponent implements OnInit {

  constructor(private service:DataserviceService) { console.log("Routing Dome");}
  city:string;
  current_data:current;
  location_data:location;

  current : object [];

  
  ngOnInit() {
    console.log('ROuting Done');

    this.city = JSON.parse(localStorage.getItem('city'));

    this.service.getdata(this.city).subscribe(
      data => {
   
         this.current_data = data['current'];
         this.location_data=data['location'];
         console.log(this.location_data.name);
         console.log(this.current_data.humidity);
         console.log(data['current']);
         console.log(data['location']);
         console.log(data['request']);
         console.log(data);
          

      });

  }

}
