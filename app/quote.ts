import { Time } from "@angular/common";

export class Quote {
    like: boolean
    dislike: boolean
   showdets:boolean
constructor(
  public quote:string,
  public author:string,
  public submitter:string,
  public upvote:number,
  public downvote:number,
  public time:Date){
this.like =false;

this.dislike = false;

this.showdets=false

}

}
