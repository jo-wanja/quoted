import { Component, OnInit, Input} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-dets',
  templateUrl: './quote-dets.component.html',
  styleUrls: ['./quote-dets.component.css']
})
export class QuoteDetsComponent implements OnInit {
  @Input() quotedets!: Quote;

  toggleLike(){
    this.quotedets.like= !this.quotedets.like
     this.quotedets.likeCount()
    console.log('clicked')
  }
  
  toggleDislike(){
    this.quotedets.dislike= !this.quotedets.dislike
     this.quotedets.dislikeCount()

  }

  constructor() { }

  ngOnInit(): void {
  }

}
