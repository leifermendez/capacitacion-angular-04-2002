import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgNotFound]'
})
export class ImgNotFoundDirective {
  @HostListener('error')
  handleError(){
    const elementoHost:HTMLImageElement = this.elRef.nativeElement
    elementoHost.src = '/assets/images/not-found.jpg'
  }


  constructor(private elRef:ElementRef) { 
   
  }

}
