import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

constructor(){}
// two way databinding
// searchValue: string = '';
 
ngOnInit(): void{

}




// event binding
// searchValue : string = '';
// changeSearchvalue(eventdata : Event){
//   this.searchValue = ((<HTMLInputElement>eventdata.target).value);
// }

// *ngfor directive
// products = [
//   {id:1, name:'Mobile', lastname:'samsung'},
//   {id:2, name:'Laptop', lastname:'asus'},
// ];

// *ngIf directive
// searchValue : string = '';
// changeSearchvalue(eventdata : Event){
//   this.searchValue = ((<HTMLInputElement>eventdata.target).value);
// }

// ngclass directive
// searchValue : string = '';
// changeSearchvalue(eventdata : Event){
//   this.searchValue = ((<HTMLInputElement>eventdata.target).value);
// }

}
