import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ProfilePageComponent } from '../profile-page/profile-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username:String = "";
  password:String = ""

  constructor(private router: Router) {} // Inject Router

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
    if(this.username === "first" && this.password === "poop"){
      this.router.navigate(['/Profile',{user: JSON.stringify(this.user)}]);
    }
   }



   
}
