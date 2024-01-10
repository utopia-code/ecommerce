export class Article {

  constructor (
    public id: number,
    public name: string,
    public imageUrl: string,
    public price: number,
    public isOnSale: boolean,
    public quantityInCart: number
  ) {}

  static isDisabledButton(article: Article): boolean {
    return article.quantityInCart <= 0;
  }
}