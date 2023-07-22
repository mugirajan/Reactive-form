import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  register: FormGroup;
  formDataArray: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.register = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      number: ['']
    });
  }

  onSubmit() {
    if (this.register.valid) {
      this.formDataArray.push(this.register.value);
      this.register.reset(); // Reset the form after data is added to the array
    }
  }
}
