import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isNavbarCollapsed = true;
  @ViewChild('navbar', {static: false}) firstChild: ElementRef;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 20) {
      this.firstChild.nativeElement.classList.add('navbar-background');
    } else {
      this.firstChild.nativeElement.classList.remove('navbar-background');
    }
  }
  constructor() { }

  ngOnInit(): void {
    // console.log(this.firstChild.nativeElement);

  }
  ngAfterViewInit() {
    // console.log(this.firstChild.nativeElement);
  }

}
