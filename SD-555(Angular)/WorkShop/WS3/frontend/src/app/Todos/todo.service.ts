import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
export type Todo={
  _id:string,
  title:string,
  description:string,
  completed:boolean

}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  http=inject(HttpClient)

post_todo(newtodo:Todo){
    return  this.http.post<{success:boolean,data:Todo}>(environment.BACKEND_SERVER_URL+'/todos',newtodo)
}
get_todo(){
  return this.http.get<{succes:true,data:Todo[]}>(environment.BACKEND_SERVER_URL+'/todos')
}
get_todobyid(id:string){
  return this.http.get<{succes:true,data:Todo}>(environment.BACKEND_SERVER_URL+`/todos/${id}`)
}
delete_todo(id:string){
  return this.http.delete<{succes:true,data:number}>(environment.BACKEND_SERVER_URL+`/todos/${id}`)

}
update_todo(updated_todo:Todo,id:string){
  return this.http.put<{succes:true,data:number}>(environment.BACKEND_SERVER_URL+`/todos/${id}`,updated_todo)
}

}