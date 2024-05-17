import { Component } from '@angular/core';
import { User } from '../../User';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  providers:[UserService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user!:User;
  username:string = "";
  password:string = "";
  constructor(private router: Router,private service: UserService) {} // Inject Router

  RegisterUser(){
    if(this.username.length < 6 || this.password.length<6){
      console.log("I will put an error here later");
    }else{
    this.service.Register(this.username,this.password).subscribe(response => {
      this.user = response;
      if(this.user !== null){
        this.router.navigate(['/Profile', {user: JSON.stringify(this.user)}] )
      }
    }
    );
  }
}

}
