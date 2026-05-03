import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatIconModule,
    MatButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthService , private router : Router) {
    
  }

  ngOnInit(): void {
    
  }

  product(){
    this.router.navigate(['/admin/products']);
  }

}
