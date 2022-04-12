import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  dispQuotes:Quote[]=[
    new Quote ('happy are the meek','Jesu','wanja',0,0),
    new Quote ('happy are the meek','Jesus','wanja',0,0),
    new Quote ('happy are the meek','Jesus','wanja',0,0),
    new Quote ('happy are the meek','Jesus','wanja',0,0),
  ]

  addQuote(quote:Quote){
    this.dispQuotes.push(quote);

}
 show:boolean=true
showDets(){
 this.show=!this.show
}

  constructor() { }

  ngOnInit(): void {
  }

}
