import { Input, Directive, ElementRef, HostBinding, HostListener, Renderer } from '@angular/core';
import { element } from 'protractor';

// this is just for showing the usage of directive
@Directive({
  selector: '[appHosts]',
  exportAs: 'hostDirective'
})
export class HostsDirective {
  @Input()
  message: string;

  @HostBinding('attr.role') role = 'button';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {

    console.log('1.HostsDirective works');
    console.log('2.hosts elementRef', elementRef.nativeElement);
  }

  @HostListener('document:click', ['$event'])
  onClick(evt) {
    console.log('3.host listener');
    if (this.elementRef.nativeElement.contains(evt.target)) {
      this.highlight('#ddd');
    } else {
      this.highlight('#fff');
    }
    console.log(evt.target);
  }

  highlight(color: string) {
    this.renderer.setElementStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    );
  }

}
