import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { taskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Input({required:true}) userId!:string;
@Output() close = new EventEmitter<void>();

taskService = inject(taskService)

enteredTitle='';
enteredSummary='';
enteredDate = '';



cancelTask(){
  this.close.emit()
}

onSubmit(){
this.taskService.addTask({
   title : this.enteredTitle,
  summary : this.enteredSummary,
  Date: this.enteredDate
}, this.userId)
this.close.emit()
}

}
