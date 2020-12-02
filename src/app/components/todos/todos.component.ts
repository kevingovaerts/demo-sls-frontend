import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoAmplifyService} from '../../services/todo-amplify.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private cdRef: ChangeDetectorRef, private todoAmplifyService: TodoAmplifyService) {
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoAmplifyService.getTodos()
      .then(response => {
        this.todos = response.data;
      })
      .catch(error => {
        console.log(error.response);
      })
      .finally(() => {
        this.cdRef.detectChanges();
      });
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(listTodos => listTodos.id !== todo.id);
    this.todoAmplifyService.deleteTodo(todo)
      .then(response => {
        console.log(this.todos);
      }).catch(err => {
      console.log(err);
    }).finally(() => {
      this.cdRef.detectChanges();
    });
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.todoAmplifyService.createTodo(todo)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log('Error while creating todo : ' + err);
      })
      .finally(() => {
        console.log(this.todos);
        this.cdRef.detectChanges();
      });
  }

  updateTodo(todo: Todo): void {
    this.todoAmplifyService.updateTodo(todo)
      .then(response => {
        console.log('update success: ' + response);
      })
      .catch(err => {
        console.log('Error while creating todo : ' + err);
      })
      .finally(() => {
        console.log(this.todos);
        this.cdRef.detectChanges();
      });
  }
}
