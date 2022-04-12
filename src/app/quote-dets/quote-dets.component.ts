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
    this.quotedets.like= true;
     this.quotedets.likeCount()
    
  }
  
  toggleDislike(){
    this.quotedets.dislike= true;
     this.quotedets.dislikeCount()

  }

  constructor() { }

  ngOnInit(): void {
  }

}
