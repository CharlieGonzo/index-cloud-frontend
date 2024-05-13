import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Index-Cloud';

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
