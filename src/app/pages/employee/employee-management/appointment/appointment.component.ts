import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goGeneralInfo() {
    this.router.navigate(['appointment/appointmentAdd']);
    this.router.navigate(['appointment/appointmentAdd/generalInfo']); 
  }

}
