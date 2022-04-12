export class Quote {
    like: boolean
    dislike: boolean
   
constructor(
  public quote:string,
  public author:string,
  public submitter:string,
  public upvote:number,
  public downvote:number){
this.like =false;

this.dislike = false;

}
likeCount (){
  if (this.like){
    
    return this.upvote +=1
  }
  return 
}

dislikeCount(){
  if (this.dislike){
    
    return this.downvote +=1
  }
  return 
}

}
