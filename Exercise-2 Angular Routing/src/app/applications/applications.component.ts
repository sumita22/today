import { Component } from '@angular/core';
import { applicantType } from '../applicant';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {
  // applicant list array of applicantType data type
    applicantList:applicantType[]=[
      {
        name:"Alan MCintosh",
        image:"../../assets/images/alan.jpg",
        place:"New York, USA",
        degree:"MCA",
        year:"3 Year"
      },
      {
        name:"Sarah",
        image:"../../assets/images/sarah.jpg",
        place:"Chennai, India",
        degree:"MSC",
        year:"2 Year"
      },
      {
        name:"Vivek",
        image:"../../assets/images/vivek.jpg",
        place:"Mumbai, India",
        degree:"BTech/CSE",
        year:"2018"
      },
      {
        name:"Catherine Elizabeth",
        image:"../../assets/images/Catherine.jpg",
        place:"Birmingham, UK",
        degree:"MCA",
        year:"2018"
      }
    ];

  //  to return the count of the applicant list
  count:number= this.applicantList.length

  // user entered search value
  searchName:string=""
  // temporary array that stores applicant list based on conditions from function filterApplicants()
  filteredApplicants = this.applicantList;

  filterApplicants(name: string) {
    this.filteredApplicants = this.applicantList.filter(applicant =>
      applicant.name.toLowerCase().includes(name.toLowerCase())
    );
  }
    
}
