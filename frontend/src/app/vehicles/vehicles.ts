import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, FormsModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class Vehicles implements OnInit {
  vehicles: any[] = [];
  displayedColumns: string[] = ['make', 'model', 'year', 'plate', 'vin', 'status'];
  currentVehicle: any = {};
  editMode: boolean = false;

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
    if (this.editMode) {
      this.vehicleService.updateVehicle(this.currentVehicle.id, this.currentVehicle).subscribe(() => {
        this.loadVehicles();
        this.resetForm();
      });
    } else {
      this.vehicleService.createVehicle(this.currentVehicle).subscribe(() => {
        this.loadVehicles();
        this.resetForm();
      });
    }
  }

  onDelete(): void {
    if (this.currentVehicle.id) {
      this.vehicleService.deleteVehicle(this.currentVehicle.id).subscribe(() => {
        this.loadVehicles();
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.currentVehicle = {};
    this.editMode = false;
  }

  addNew(): void {
    this.resetForm();
  }
}
