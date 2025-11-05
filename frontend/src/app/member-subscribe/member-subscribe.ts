import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../company';

@Component({
  selector: 'app-member-subscribe',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatDialogModule, FormsModule],
  templateUrl: './member-subscribe.html',
  styleUrl: './member-subscribe.css',
})
export class MemberSubscribe implements OnInit {
  step: number = 1; // 1 = Account Info, 2 = Personal Info
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  street: string = '';
  city: string = '';
  state: string = '';
  zipcode: string = '';
  selectedCompanyId: number | null = null;
  companies: any[] = [];

  constructor(private companyService: CompanyService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  onAccountSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    this.step = 2; // Move to personal information step
  }

  onPersonalSubmit() {
    // TODO: Implement full registration
    alert('Registration completed!');
  }

  goBack() {
    this.step = 1;
  }

  openAddCompanyDialog() {
    // TODO: Implement dialog for adding new company
    alert('Add company dialog - TODO');
  }
}
