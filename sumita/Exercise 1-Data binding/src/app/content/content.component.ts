import { Component } from '@angular/core';
import { JobApplied } from '../job';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  getBootstrapIconClass(iconName: string): string {
    return `bi bi-${iconName}`;
  }

  // job data array of interface type JobApplied imported from jobs.ts
  jobs: JobApplied[] =
  [{

    id: "#APL-0003",
    dateApplied: "June1, 2020, 8.22 AM",
    company: "Mosciski Inc. Creative Design Agency",
    type: "FREELANCE",
    position:"Intern UI Designer",
    contact:['instagram', 'telephone-forward-fill'],
    status:"Pending"

  },
  {

    id: "#APL-0002",
    dateApplied: "June1, 2020, 8.22 AM",
    company: "Funk Inc. IT Department",
    type: "PARTTIME",
    position:"Junior UI Designer",
    contact:['whatsapp', 'telephone-forward-fill'],
    status:"On-Hold"

  },
  {

    id: "#APL-0003",
    dateApplied: "June1, 2020, 8.22 AM",
    company: "Mosciski Inc. Creative Design Agency",
    type: "FREELANCE",
    position:"Intern UI Designer",
    contact:['whatsapp'],
    status:"Pending"

  },
  {

    id: "#APL-0001",
    dateApplied: "June1, 2020, 8.22 AM",
    company: "Highspeed Studios Creative Design Agency",
    type: "FULLTIME",
    position:"Senior UI Designer",
    contact:['whatsapp', 'telephone-forward-fill'],
    status:"Candidate"

  },
  {

    id: "#APL-0002",
    dateApplied: "June1, 2020, 8.22 AM",
    company: "Func Inc. Creative Design Agency",
    type: "PARTTIME",
    position:"Junior UI Designer",
    contact:['whatsapp', 'telephone-forward-fill'],
    status:"On-Hold"

  },
  {

    id: "#APL-0001",
    dateApplied: "June1, 2020, 8.22 AM",
    company: "Highspeed Studios Creative Design Agency",
    type: "FULLTIME",
    position:"Senior UX Designer",
    contact:['whatsapp', 'telephone-forward-fill'],
    status:"Candidate"

  }
  ]

  // a temporary array object that can hold jobs based on condition
  tempJobs: JobApplied[] = this.jobs;

  // filter function to filter data based on condition
  filter(jobstatus: string) {

    // if condition for all
    if (jobstatus === "All") {
      console.log("all");
      return this.tempJobs = this.jobs;
      console.log(this.tempJobs)
    }

    // condition when specific status is clicked
    else {
      console.log(jobstatus)
      const filteredJobs: JobApplied[] = this.jobs.filter(jobs => Object.values(jobs).some(value => typeof value === 'string' && value.toLowerCase().includes(jobstatus.toLowerCase())));
      return this.tempJobs = filteredJobs;
    }
  }
  

  // to add styles to status specifically to the data
  getClasses(valstatus: string|undefined){
   return{
    'pending':valstatus==="Pending",
    'onhold':valstatus==="On-Hold",
    'candidate':valstatus==="Candidate"
   }
  }
}
