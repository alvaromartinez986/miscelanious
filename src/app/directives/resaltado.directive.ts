import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") newColor: string;


  @HostListener('mouseenter') mouseEntry() {
    this.highligth(this.newColor || "yellow");
  }

  @HostListener('mouseleave') mouseLeave() {
    this.highligth(null);
  }


  constructor(private el: ElementRef) {
  }

  private highligth(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
