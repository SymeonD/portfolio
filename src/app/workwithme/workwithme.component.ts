import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-workwithme',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './workwithme.component.html',
  styleUrl: './workwithme.component.css'
})
export class WorkwithmeComponent {

  contactFormgroup: FormGroup;
  contactSent: boolean;

  constructor(private formBuilder: FormBuilder) { 
    this.contactFormgroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
    this.contactSent = false;
  }

  sendContact(){
    if(this.contactFormgroup.invalid){
      return;
    }
    // Send the form data to the server
    var data = {
      subject: this.contactFormgroup.get("name")?.value + " | " + this.contactFormgroup.get("email")?.value,
      body: this.contactFormgroup.get("message")?.value
    };
    fetch("https://in2a2x7jheihmujw63hejswsiq0gshhg.lambda-url.us-east-1.on.aws/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      if(response.ok){
        this.contactSent = true;
      }
      else{
        console.error(response);
        this.contactSent = false;
      }
    })
    .catch((error) => {
      console.error(error);
      this.contactSent = false;
    })
    .finally(() => {
      // Reset the form
      this.contactFormgroup.reset();
      for (let name in this.contactFormgroup.controls) {
        this.contactFormgroup.controls[name].setErrors(null);
      }
    });
  }

}
