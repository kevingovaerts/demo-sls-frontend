import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  setClasses(): { todo: boolean; 'is-complete': boolean } {
    return {
      todo: true,
      'is-complete': this.todo.completed
    };
  }

  onToggle(todo): void {
    // toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(item => {
      console.log(item);
    });
  }

  onDelete(todo): void {
    this.deleteTodo.emit(todo);
  }

}
