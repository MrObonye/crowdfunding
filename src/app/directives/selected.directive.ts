import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective implements OnChanges {
  // instance of FormControl this radio btn belongs to
  @Input() control: FormControl;

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    this.control.valueChanges.subscribe(newVal => this.manageClass(newVal));
  }
  // Compares the control's new value to the "value" property of the DOM radio btn
  // If they match, it means the radio btn is currently selected. Set/remove classes
  manageClass(newVal) {
    const e = this.element.nativeElement;
    if (e.value === newVal) { e.parentElement.classList.add('selected'); }
    else { e.parentElement.classList.remove('selected'); }
  }

}
