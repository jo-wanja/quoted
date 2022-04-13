import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-dets',
  templateUrl: './quote-dets.component.html',
  styleUrls: ['./quote-dets.component.css']
})
export class QuoteDetsComponent implements OnInit {
  @Input() quotedets!: Quote;
  


  

  toggleLike(){
    
  this.quotedets.like=!this.quotedets.like
    if(this.quotedets.like){
      this.quotedets.upvote+=1
    }
    else{
      this.quotedets.upvote-=1
    }

}
  
  
  toggleDislike(){

    this.quotedets.dislike=!this.quotedets.dislike
    if(this.quotedets.dislike){
      this.quotedets.downvote+=1
    }
    else{
      this.quotedets.downvote-=1
}
     
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
