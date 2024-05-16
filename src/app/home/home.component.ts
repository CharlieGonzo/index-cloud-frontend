import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ProfilePageComponent } from '../profile-page/profile-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../../User';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  providers:[UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username:string = "";
  password:string = ""
  loggedInUser!:User;
  constructor(private router: Router,private service: UserService) {} // Inject Router

  user = {
    id:1,
    username:"first",
    decks:[
      {
      id:1,
      userId:1,
      nameOfDeck:"firstDeck",
      cards:[
        {
          id: 1,
          deckId: 1,
          CardName:"what is awesome",
          CardInfo:"Sho"
        }
      ]
      },
      {
        id:2,
        userId:1,
        nameOfDeck:"firstDeck",
        cards:[
          {
            id: 1,
            deckId: 1,
            CardName:"what is awesome",
            CardInfo:"Sho"
          }
        ]
        },
        {
          id:3,
          userId:1,
          nameOfDeck:"firstDeck",
          cards:[
            {
              id: 1,
              deckId: 1,
              CardName:"what is awesome",
              CardInfo:"Sho"
            }
          ]
          }

    ]
   }


   login(){
   
    this.service.login(this.username,this.password).subscribe(
      response => {
        console.log(response);
        this.loggedInUser = response;
        if(this.loggedInUser == null){
          console.log("boo")
        }else{
          console.log(this.loggedInUser.username);
          this.router.navigate(['/Profile', {user: JSON.stringify(this.loggedInUser)}] )
        }
      }
    )
    
   }



   
}
