import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = '#b3caf0';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  // constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  constructor() { }

  ngOnInit() {
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#b3caf0');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#b3caf0');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
