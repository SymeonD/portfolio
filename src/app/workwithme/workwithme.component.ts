import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workwithme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workwithme.component.html',
  styleUrl: './workwithme.component.css'
})
export class WorkwithmeComponent {

  ngOnInit():void {
    
    // Get the form
    var form = document.getElementById("ContactMe") as HTMLFormElement;
    // Get the button that sends the form
    var submit = form?.querySelector("button[type=submit]");

    // When the user clicks on the button, prevent the form from submitting
    submit?.addEventListener("click", function(event) {
      // Prevent the reload of the page
      event.preventDefault();

      // Get the form data
      var name = form?.querySelector("input[name=name]") as HTMLInputElement;
      var email = form?.querySelector("input[name=email]") as HTMLInputElement;
      var message = form?.querySelector("textarea[name=message]") as HTMLTextAreaElement;

      // Send the form data to the server
      var data = {
        subject: name.value + " | " + email.value,
        body: message.value
      };
      fetch("https://in2a2x7jheihmujw63hejswsiq0gshhg.lambda-url.us-east-1.on.aws/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.error(error);
      });
    });
  }

}
