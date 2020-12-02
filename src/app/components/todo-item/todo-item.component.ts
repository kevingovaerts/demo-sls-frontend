import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  setCss(): any {
    return {
      'is-completed': this.todo.completed
    };
  }

  onToggle(todo): void {
    todo.completed = !todo.completed;
    this.toggleTodo.emit(todo);
  }

  onDelete(todo): void {
    this.deleteTodo.emit(todo);
  }

}
