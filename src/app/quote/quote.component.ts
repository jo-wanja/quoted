import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  dispQuotes:Quote[]=[
    {quote:'happy are the meek',author:'Jesus',submitter:'wanja',upvote:0,downvote:0},
    {quote:'happy are the meek',author:'Jesus',submitter:'wanja',upvote:0,downvote:0},
    {quote:'happy are the meek',author:'Jesus',submitter:'wanja',upvote:0,downvote:0},
    {quote:'happy are the meek',author:'Jesus',submitter:'wanja',upvote:0,downvote:0},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
