import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcontent',
  templateUrl: './childcontent.component.html',
  styleUrls: ['./childcontent.component.css']
})
export class ChildcontentComponent {
  

  @Output() typeSelected  = new EventEmitter<any>();
// function to emit the selected job title
selectType(clickedJob:string) {
  this.typeSelected.emit(clickedJob);
}



@Input() cmessage:any='';
@Input() showColorfulDiv = false;

}
