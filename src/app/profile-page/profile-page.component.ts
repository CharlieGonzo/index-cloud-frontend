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
  user: any;
  edit:boolean = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const userJson = params.get('user');
      if (userJson !== null) {
        this.user = JSON.parse(userJson);
      } else {
        // Handle the case where 'user' parameter is not found or is null
      }
    });
  }

  get userDecks(){
    return this.user.decks;
  }



  changeEdit(){
    this.edit = !this.edit;
  }





 

   
}
