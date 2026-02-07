import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-layout',
  standalone: true,
  imports: [ ],
  templateUrl: './entry-layout.component.html',
  styleUrl: './entry-layout.component.css'
})
export class EntryLayoutComponent {
  
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

}
