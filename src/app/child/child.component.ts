import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
//@Input() data=""
data =" i am from child co"
@Output() emitChildData = new EventEmitter();
onClick() {
this.emitChildData.emit(this.data)

}


}
