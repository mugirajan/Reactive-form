import { Component , OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form';
  register= new FormGroup({
    name:new FormControl("mugi"),
    email:new FormControl("mugirajan@gmail.com"),
    number:new FormControl("9344")
  });

GetData(){
    console.log(this.register.value)
}
ngOnInit(): void {
   
 }

}
