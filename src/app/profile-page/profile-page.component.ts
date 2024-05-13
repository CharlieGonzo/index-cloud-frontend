import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardDeck } from '../../CardDeck';
import { User } from '../../User';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  user!: User;
  edit:boolean = false;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['user']) {
        this.user = JSON.parse(params['user']);
      }
    });
  }

  get userDecks(){
    return this.user.decks;
  }

  getLength(){
    const deck:CardDeck[] = this.user.decks;
    return deck.length
  }

  changeEdit(){
    this.edit = !this.edit;
  }





 

   
}
