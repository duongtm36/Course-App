import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpenDropDown = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpenDropDown = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpenDropDown
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
