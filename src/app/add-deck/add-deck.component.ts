import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-deck',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  providers:[UserService],
  templateUrl: './add-deck.component.html',
  styleUrl: './add-deck.component.css'
})
export class AddDeckComponent {

  DeckName:string = '';

  constructor(private route: ActivatedRoute,private service:UserService) {

  }

  



}
