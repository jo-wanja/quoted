import { Time } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today=new Date
    let withoutTime:any= new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let timeDiff= Math.abs(withoutTime-value)
    let diff= (timeDiff*0.001) 
    const secondsaDay= 86400
    let diffinDays= diff/secondsaDay

    if (diffinDays>=1){
      return diffinDays
    }
    else{
      return 0
    }
    
  }

}
