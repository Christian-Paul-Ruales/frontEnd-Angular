import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { results } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //result:results
  constructor(private http:HttpClient) { 
    
  }
  Url='http://localhost:8989/results';

  getresult(){
    return this.http.get<results[]>(this.Url);

  }

  sendReply(reply:results){
    console.log("Ejecuto");
    console.log(reply);
    return this.http.post<results>(this.Url,reply);
    
  }
}
