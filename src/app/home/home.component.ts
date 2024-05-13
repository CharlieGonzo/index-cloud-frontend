import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
      }

    ]
   }
   
}
