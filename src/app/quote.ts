export class Quote {
    like: boolean
    dislike: boolean
    time:number
   
constructor(
  public quote:string,
  public author:string,
  public submitter:string,
  public upvote:number,
  public downvote:number
  ){
this.like =false;

this.dislike = false;
this.time= Date.now()

}

}
