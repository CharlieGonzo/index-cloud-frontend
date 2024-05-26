import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardDeck } from '../../CardDeck';
import { User } from '../../User';
import { AddDeckComponent } from '../add-deck/add-deck.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule,AddDeckComponent,HttpClientModule],
  providers: [UserService],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

  user!: User;
  edit:boolean = false;
  add:boolean = false;

  constructor(private route: ActivatedRoute,private service:UserService) {
  }

  /**
   * on initialization this method will obtain user info from login page and map it to the user variable
   * in this page.
   */
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

  /**
   * return the user's decks
   */
  get userDecks(){
    return this.user.decks;
  }

  /**
   * Create a new deck for user and save changes to database.
   * @param name name of new deck
   */
  updateAddDeck(name:string){
    //save changes to database
   this.service.addDeckToUser(this.user.id,name);
    
   //create new deck  
   const newDeck:CardDeck = {
    nameOfDeck : name,
    Cards : [],
   }

   //add deck to user object
   this.user.decks.push(newDeck )
  }

  changeEdit(){
    this.edit = !this.edit;
  }
  addDeck() {
  this.add = !this.add;
  }

  





 

   
}
