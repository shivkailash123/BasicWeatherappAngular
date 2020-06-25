import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  cityform: FormGroup;
  title = 'myweatherapp';
  parentMessage = "message from parent";
  constructor(private router:Router){};
  name:string;
  city:string;

  ngOnInit(){
    this.cityform = new FormGroup({
    city: new FormControl('',[Validators.required])
  
});
}

  citydata(){

    this.city = this.cityform.value.city;
    console.log(this.cityform.value);
     console.log(this.city);
     localStorage.setItem('city' , JSON.stringify(this.city));
     this.router.navigate(["datapage"]);

  }

}
