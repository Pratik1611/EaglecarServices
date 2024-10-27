// src/app/service-list/service-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CarService, Service } from '../services/car.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services: Service[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    // this.carService.getServices().subscribe((data) => {
    //   this.services = data;
    // });
  }
}
