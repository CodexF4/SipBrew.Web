import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-shared-layout.component',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './shared-layout.component.html',
  styleUrl: './shared-layout.component.css',
})
export class SharedLayoutComponent {
  constructor(public auth: AuthService) {}
}
