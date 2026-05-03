import { Component } from '@angular/core';
import { AuthService } from '../../@core/services/auth-service';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true
})
export class DashboardComponent {
  constructor(public auth: AuthService) {}

ngOnInit() {
  if (this.auth.isAdmin) {
    console.log('You are admin!');
  } else {
    console.log('Not admin');
  }
}
}

