import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http=inject(HttpClient)
  data=inject(AuthService)

  post_picture(formdata:FormData){
    return this.http.post<{ success: boolean, data: boolean }>(environment.BACKEND_SERVER_URL+`/users/${this.data.state$()._id}`+'/pictures',formdata)

  }
  get_picture(){
    return this.http.get<{succes:true,data:{_id:string,url:string}[]}>(environment.BACKEND_SERVER_URL+`/users/${this.data.state$()._id}/pictures`)
  }
}
