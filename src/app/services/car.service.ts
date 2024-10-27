// src/app/services/car.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  // private apiUrl = 'https://api.example.com/car-services';

  // constructor(private http: HttpClient) { }

  // getServices(): Observable<Service[]> {
  //   return this.http.get<Service[]>(this.apiUrl);
  // }

  // getServiceById(id: number): Observable<Service> {
  //   return this.http.get<Service>(`${this.apiUrl}/${id}`);
  // }
}
