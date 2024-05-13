import { Component } from '@angular/core';
import { User } from '../../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:any;

  constructor(private router: Router) {} // Inject Router

  
}
