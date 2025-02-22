import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultBackendService {

  constructor(private http: HttpClient) { }

  
  
  public getData(alertas:boolean) {

    const token = localStorage.getItem('jwt');
    let httpOptions = {
      // headers: new HttpHeaders().set('authenticate', `Bearer ${token}`)
    };

    if(alertas){
      return this.http.get('http://localhost:8282/alertas/', httpOptions);

    }

    return this.http.get('http://localhost:8282/senales/', httpOptions);
  }
}