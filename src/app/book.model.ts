

export class Book {
  public title: string;
  public author: string;
  public language: string;
  public country: string;


  constructor(title: string, author: string, language: string, country: string) {
    this.title = title;
    this.author = author;
    this.language = language;
    this.country = country;
  }
}
