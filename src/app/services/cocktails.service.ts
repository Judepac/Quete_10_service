import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  cocktails = [
    {
      name: 'Cosmopolitain',
      price: 7,
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://www.patrontequila.com/binaries/largeretina/content/gallery/patrontequila/recipes/patron-citronge-orange-liqueur/citr-nge-cosmo/cocktail.jpg'

    },
    {
      name: 'Mojito',
      price: 8,
      imageUrl: 'https://rea.fr/wp-content/uploads/2017/12/mojito-300x400-225x300.png'

    },
    {
      name: 'Sex on The Beach',
      price: 7.5,
      imageUrl: 'https://www.giovanny.fr/wp-content/uploads/2016/04/Sex-on-the-beach-cocktail-17.jpg'

    }
  ];

  constructor() { }

  getCocktails() {
    return this.cocktails;
  }

}
