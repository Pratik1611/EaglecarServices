
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent  {
  cars = [
    {
      name: 'Sedan 4+1',
      image: 'assets/sedan.webp',
      description: 'Spacious and comfortable for family trips. Toll Parking And DA Extra ',
      seatingCapacity: '4 + 1 seats',
      transmission: 'Manual 300 AVG',
      fuelType: 'Diesel 14rs/km'
    },
    {
      name: 'Ertiga 6+1',
      image: 'assets/ertiga.webp',
      description: 'Elegant sedan for city rides.Toll Parking And DA Extra',
      seatingCapacity: '6 + 1 seats',
      transmission: 'Manual 300 AVG',
      fuelType: 'Petrol 16rs/km'
    },
    {
      name: 'Innova 6+1',
      image: 'assets/innova.webp',
      description: 'Compact and fuel-efficient for daily commutes.Toll Parking And DA Extra',
      seatingCapacity: '6 + 1 seats',
      transmission: 'Manual 300 AVG',
      fuelType: 'Diesel 17rs/km'
    },
    {
      name: 'Innova crysta 6+1',
      image: 'assets/innova-crysta.webp',
      description: 'Stylish and powerful SUV for long drives.Toll Parking And DA Extra',
      seatingCapacity: '6 + 1 seats',
      transmission: 'Manual 300 AVG',
      fuelType: 'Diesel 20rs/km'
    }
  ];
}
