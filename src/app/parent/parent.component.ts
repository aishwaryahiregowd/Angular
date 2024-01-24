import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
data = ""
@ViewChild (ChildComponent) child: any;
onClickGetChildData(){
  this.data=this.child.data
}
getChildData(event: any){
  this.data=event
}

}
