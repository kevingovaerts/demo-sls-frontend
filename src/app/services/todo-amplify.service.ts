import {Injectable} from '@angular/core';
import {API} from 'aws-amplify';
import {Todo} from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoAmplifyService {
  readonly apiName = 'sls-todo-api';
  readonly path = '/todos?_limit=5';

  constructor() {
  }

  getTodos(): Promise<any> {
    const init = {
      headers: {},
      response: true
    };

    return API.get(this.apiName, this.path, init);
  }

  createTodo(todo: Todo): Promise<Todo> {
    const init = {
      headers: {},
      body: todo
    };

    return API.post(this.apiName, this.path, init);
  }

  deleteTodo(todo: Todo): Promise<any> {
    const init = {
      headers: {},
      body: todo
    };

    return API.del(this.apiName, this.path, init);
  }

  updateTodo(todo: Todo): Promise<any> {
    const init = {
      headers: {},
      body: todo
    };

    return API.put(this.apiName, this.path, init);
  }
}
