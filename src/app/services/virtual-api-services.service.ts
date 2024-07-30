import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirtualApiServicesService {
  private apiRoute = "https://localhost:7141/";
  constructor(private http:HttpClient) { }

  getAllCustomer():Observable<any>{
    return this.http.get<any>(`${this.apiRoute}api/Customer`);
  }

  getAllProduct():Observable<any>{
    return this.http.get<any>(`${this.apiRoute}api/Product`);
  }
}
