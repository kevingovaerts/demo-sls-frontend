import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TodosComponent} from './components/todos/todos.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {HeaderComponent} from './components/layout/header/header.component';
import {AddTodoComponent} from './components/add-todo/add-todo.component';
import {FormsModule} from '@angular/forms';

import Amplify from 'aws-amplify';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import config from '../config';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {},
  API: {}
});


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AmplifyUIAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
