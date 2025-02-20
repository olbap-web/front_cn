import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultBackendService {

  constructor(private http: HttpClient) { }

  
  
  public consumirBackend() {

    const token = localStorage.getItem('jwt');

    let httpOptions = {
      // headers: new HttpHeaders().set('authenticate', `Bearer ${token}`)
    };

    return this.http.get('http://localhost:8081/usuarios', httpOptions);
  }
}
