import { HttpClient } from '@angular/common/http';
import { Injectable,inject} from '@angular/core';
import { environment } from '../../environments/environment.development';
 
export type Image = { filename: string, originalname: string,_id:string }
export type Review = {_id?:string,review: string, rating: number, by: { user_id: string, fullname: string }, date: number }
export type Owner = { user_id: string, fullname: string, email: string }

export type Medication={
  _id:string
  name: string,
  first_letter: string,
  generic_name: string,
  medication_class: string,
  availability: string,
  image: Image,
  added_by: Owner,
  reviews: Review[]

}

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  // $medications  = signal<Medication[]>([]);
  http=inject(HttpClient)
 
   post_medication(formdata:FormData){
    return this.http.post<{ "success": boolean, "data": Medication }>(environment.BACKEND_SERVER_URL+'/medications',formdata)
   }
   get_alphabet(letter:string){
    return this.http.get<{"success": boolean,"data":Medication[]}>(environment.BACKEND_SERVER_URL+`/medications?first_letter=${letter}`)

   }
   get_medicationByID(id:string){
    return this.http.get< {"success": boolean, "data": Medication }>(environment.BACKEND_SERVER_URL+`/medications/${id}`)
   }
   delete_medication(id:string){
    return this.http.delete<{ "success": boolean, "data": boolean }>(environment.BACKEND_SERVER_URL+`/medications/${id}`)

   }
   update_medication(formdata:FormData,id:string){
    return this.http.put< { "success": boolean, "data": boolean }>(environment.BACKEND_SERVER_URL+`/medications/${id}`,formdata)
   }
   add_review(id:string,review:Review){
    return this.http.post<{"success":boolean,"data":string }>(environment.BACKEND_SERVER_URL+`/medications/${id}/reviews`,review)
   }
   get_reviewId(id:string){
    return this.http.get<{ "success": boolean, "data": string }>(environment.BACKEND_SERVER_URL+`/medications/${id}/reviews`)
   }
   delete_review(medicationid:string, reviewid:string){
    return this.http.delete<{ "success": boolean, "data": boolean }>(environment.BACKEND_SERVER_URL+`/medications/${medicationid}/reviews/${reviewid}`)

   }
   update_review(medicine_id:string,review_id:string,review:Review){
    return this.http.put<{ "success": boolean, "data": boolean }>(environment.BACKEND_SERVER_URL+`/medications/${medicine_id}/reviews/${review_id}`,review)

   }
}
