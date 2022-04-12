import { Directive,ElementRef,Input} from '@angular/core';
import { QuoteComponent } from './quote/quote.component';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

 

  constructor(private elem:ElementRef  ){
    

    this.elem.nativeElement.style.Color = 'brown';
    }

      

  }


