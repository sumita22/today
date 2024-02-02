import { Component } from '@angular/core';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {
  // STRING INTERPOLATION =>feeding the value or result of an expression to be displayed
applicantName:string="akhita";

// changing the header color using PROPERTY BINDING
headerColor: string = 'blue';

// PROPERTY BINDING => the attribute of the button can be changed here
disableValue:boolean = true;

// EVENT BINDING
onClick() {
  window.alert('Submit button is clicked which triggers this alert message');
}

// TWO WAY DATA BINDING
name:string= 'akhita';
email:string="akhita2203@gmail"
}


