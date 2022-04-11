import { Component, OnInit, Output, EventEmitter }from '@angular/core';
;

import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote('','','',0,0);

  mouseover!:boolean

  @Output() nwQuote = new EventEmitter<Quote> ()

  submitForm(){
    this.nwQuote.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
