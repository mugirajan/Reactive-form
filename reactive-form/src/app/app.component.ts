import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 persons: any[] = [];
 personForm:FormGroup;
 currentIndex:any;
 isUpdate:boolean=false;
 

 constructor(private fb:FormBuilder){
  this.personForm=this.fb.group({
    name:['',Validators.required],
    email: ['',Validators.required],
    number: ['',Validators.required]
  });
  console.log(this.personForm)
 }

  add() {
    this.persons.push(this.personForm.value)
  }
  delete(index:any){
      this.persons.splice(index,1)
  }
  edit(person:any,index:any){
      this.currentIndex =  index;
      this.personForm.setValue(person);
      this.isUpdate=true;
  }
  update(){
    this.persons[this.currentIndex]=this.personForm.value;
    this.isUpdate=false;
  }
}
