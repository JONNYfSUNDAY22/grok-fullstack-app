import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class Vehicles implements OnInit {
  vehicles: any[] = [];
  displayedColumns: string[] = ['make', 'model', 'year', 'plate', 'vin', 'status'];
  vehicle: any = {};

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  onSubmit(): void {
    if (this.vehicle.id) {
      this.vehicleService.updateVehicle(this.vehicle.id, this.vehicle).subscribe(() => {
        this.loadVehicles();
        this.vehicle = {};
      });
    } else {
      this.vehicleService.createVehicle(this.vehicle).subscribe(() => {
        this.loadVehicles();
        this.vehicle = {};
      });
    }
  }

  onDelete(): void {
    if (this.vehicle.id) {
      this.vehicleService.deleteVehicle(this.vehicle.id).subscribe(() => {
        this.loadVehicles();
        this.vehicle = {};
      });
    }
  }
}
