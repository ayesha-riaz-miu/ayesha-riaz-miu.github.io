import { Router, Routes } from '@angular/router';


export const Todosroutes:Routes=[
    {path:'list',loadComponent:()=>import('./list-todos/list-todos.component').then(c=>c.ListTodosComponent)},
    {path:'add',loadComponent:()=>import('./add-todos/add-todos.component').then(c=>c.AddTodosComponent)},
    {path:'update/:id',loadComponent:()=>import('./update-todos/update-todos.component').then(c=>c.UpdateTodosComponent)},
    {path:':id',loadComponent:()=>import('./todo/todo.component').then(c=>c.TodoComponent)}
]


