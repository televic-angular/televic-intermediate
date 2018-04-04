import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appExportAs]',
  exportAs: 'DirectiveExport'
})
export class ExportAsDirective {

  @Input()
  message: string;

  constructor(elementRef: ElementRef) { }

  displayMessage(): void {
    alert(this.message);

  }

}
