import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;
  inputField = document.getElementById('title-box');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitTodo(): void {
    const todo = {
      title: this.title,
      completed: false
    };
    this.addTodo.emit(todo);
  }

}
