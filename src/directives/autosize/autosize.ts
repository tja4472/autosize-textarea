import { ElementRef, HostListener, Directive, OnInit } from '@angular/core';

@Directive({
  selector: 'ion-textarea[tja-autosize]'
})

export class Autosize implements OnInit {
  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
    console.log('onInput');
    this.adjust();
  }

  constructor(public element: ElementRef) {
    console.log('>>>Autosize:constructor');

  }

  ngOnInit(): void {
    console.log('ngOnInit');
    setTimeout(() => this.adjust(), 0);
  }

  adjust(): void {
    console.log('adjust');
    let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + "px";
  }
}