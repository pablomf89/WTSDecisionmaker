import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { stringify } from 'querystring';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public overlayContainer: OverlayContainer, @Inject(DOCUMENT) private document: Document) { }
  @HostBinding('class') componentCssClass;


  ngOnInit(): void {
  }
  onSetTheme(previousTheme, newTheme) {
    if (newTheme != '' && !this.document.body.classList.contains(newTheme)) {
      this.document.body.classList.add(newTheme);
    }
    if (previousTheme != '' && this.document.body.classList.contains(previousTheme)) {
      this.document.body.classList.remove(previousTheme);
    }
    this.componentCssClass = newTheme;
  }
}
