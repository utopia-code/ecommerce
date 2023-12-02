export class Article {
  minusButton: boolean = false;

  constructor (public name: string,
              public imageUrl: string,
              public price: number,
              public isOnSale: boolean,
              public quantityInCart: number
              ) {}

  isDisabledButton(): boolean {
    return this.quantityInCart <= 0;
  }
}