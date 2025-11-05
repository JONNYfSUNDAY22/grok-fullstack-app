import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Device {
  isMobile = window.innerWidth <= 600;
  isTablet = window.innerWidth > 600 && window.innerWidth <= 1024;
  isPC = window.innerWidth > 1024;
}
