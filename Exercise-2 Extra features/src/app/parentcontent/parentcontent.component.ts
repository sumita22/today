import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parentcontent',
  templateUrl: './parentcontent.component.html',
  styleUrls: ['./parentcontent.component.css']
})
export class ParentcontentComponent {
  // jobdetails array contains the details of job
  jobdetails = [
    {
      logo: "../../assets/images/amazon-logo.png",
      jobtitle: "Dot Net Developer",
      company: "Amazon",
      location: "New York",
      description: "We are looking for a Dot Net Developer to turn our product into easy-to-use products for our clients",
      type:"Full-time",
      experience:"Mid-Level",
      salary:"$3000 - $5000",
      site:"Onsite"
    },
    {
      logo: "../../assets/images/ebay-logo.png",
      jobtitle: "Angular Developer",
      company: "Ebay",
      location: "Boston",
      description: "We are looking for a Angular Developer to turn our product into easy-to-use products for our clients",
      type:"Full-time",
      experience:"High-Level",
      salary:"$4000 - $5000",
      site:"Onsite"
    },
    {
      logo: "../../assets/images/shopee-logo.png",
      jobtitle: "UX Designer",
      company: "Shopee",
      location: "Bangalore",
      description: "We are looking for a UX Designer to turn our product into easy-to-use products for our clients",
      type:"Full-time",
      experience:"Mid-Level",
      salary:"$6000 - $8000",
      site:"Remote"
    }
  ]

  // temporary array that can hold array values based on condition
  filteredDetails:any=this.jobdetails;

  // function that takes selected type from child and emits here at parent component
  OntypeSelected(Stype: string) {
    if (Stype === 'All' ) {
      this.filteredDetails = this.jobdetails;
    } else {
      this.filteredDetails = this.jobdetails.filter(person => person.jobtitle === Stype);
    }
  }
 
  
  message:any=""
  isColorfulDivVisible = false;
  
  // event is triggered when Apply now Button is clicked
  jobapplied(title:any,company:any){
    this.message="Congratulations!!!!! You have Applied Successfully for "+title+" job at " +company;
    this.isColorfulDivVisible = true;
  }
  

  
}
