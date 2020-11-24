import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.cdRef.detectChanges();
    });
  }

  deleteTodo(todo: Todo): void {
    // remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // remove from server
    this.todoService.deleteTodo(todo).subscribe(
      e => {
        this.cdRef.detectChanges();
      }
    );
  }

  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe(item => {
      this.todos.push(item);
      this.cdRef.detectChanges();
    });
  }
}
