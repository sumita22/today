import { Component } from '@angular/core';
import { companyMembersType } from '../companyMember';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
// applicant list array of applicantType data type
companyMember:companyMembersType[]=[
  {
    name:"Alan MCintosh",
    image:"../../assets/images/alan.jpg",
    id:8908394,
    jobRole:'JAVA Developer',
    email:'alan@gmail.com'
  },
  {
    name:"Sarah Bunting",
    image:"../../assets/images/sarah.jpg",
    id:18973945,
    jobRole:'HR Manager',
    email:'sarah@gmail.com'
  },
  {
    name:"Vivek Mehta",
    image:"../../assets/images/vivek.jpg",
    id:25633845,
    jobRole:'Marketing Executive',
    email:'vivek@gmail.com'
  },
  {
    name:"Catherine Wyler",
    image:"../../assets/images/Catherine.jpg",
    id:3548394,
    jobRole:'System Analyst',
    email:'catherine@gmail.com'
  }
];

//  to return the count of the companyMember list
count:number= this.companyMember.length

// user entered search value
searchName:string=""
// temporary array that stores companyMember list based on conditions from function filterApplicants()
filteredApplicants = this.companyMember;

filterApplicants(name: string) {
this.filteredApplicants = this.companyMember.filter(applicant =>
  (applicant.name.toLowerCase().includes(name.toLowerCase())||applicant.id.toString().includes(name)
));
}
}
