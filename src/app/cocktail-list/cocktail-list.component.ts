import { CocktailsService } from './../services/cocktails.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})

export class CocktailListComponent implements OnInit {

  cocktails: any[];

  constructor(public cocktailService: CocktailsService) { }


  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails();
  }

}
