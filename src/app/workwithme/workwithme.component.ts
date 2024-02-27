import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  contactSent: boolean = false;

  name: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  message: FormControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
  contactFormgroup: FormGroup = new FormGroup({
    name: this.name,
    email: this.email,
    message: this.message
  });

  sendContact(){
    if(this.contactFormgroup.invalid){
      return;
    }
    // Send the form data to the server
    var data = {
      subject: this.name.value + " | " + this.email.value,
      body: this.message.value
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
      this.contactFormgroup.markAsPristine();
    });
  }

}
