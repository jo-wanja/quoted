import { Component, Directive, OnInit, TemplateRef } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  dispQuotes:Quote[]=[
    new Quote ('Never memorize something that you can look up.','Albert Einstein','wanja',0,0,new Date(2022,4,14)),
    new Quote ('An expert is a person who has made all the mistakes that can be made in a very narrow field.','Niels Bohr','wanja',0,0,new Date(2022,4,14)),
    new Quote ('In the beginning there was nothing, which exploded.','Terry Prachett','wanja',0,0,new Date(2022,4,13)),
    new Quote ('happy are the meek','Jesus','wanja',0,0,new Date(2022,4,14)),
  ]

  addQuote(quote:Quote){
    this.dispQuotes.push(quote);

}
 show:boolean=true
showDets(i:number){
 this.dispQuotes[i].showdets=!this.dispQuotes[i].showdets
}


deleteQ(boo:boolean,i:number){

  if(boo){
    let toDelete = confirm(`Are you sure you want to delete this Quote?`)

    if(toDelete){
      this.dispQuotes.splice(i,1)
    }
  }
}


down!:any
meh!:any
 mostLiked!:any
 notsoLiked!:any

  constructor() { }

  ngOnInit(): void {
  }

}
