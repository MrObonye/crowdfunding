import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isNavbarCollapsed = true;
  @ViewChild('navbar', {static: false}) firstChild: ElementRef;
  @ViewChild('hasFade', {static: false}) overlay: ElementRef;
  @ViewChild('mobileMenuIcon', {static: false}) mobileMenuIcon: ElementRef;
  @ViewChild('menu', {static: false}) menu: ElementRef;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 20) {
      this.firstChild.nativeElement.classList.add('navbar-background');
    } else {
      this.firstChild.nativeElement.classList.remove('navbar-background');
    }
  }
  @HostListener('click', ['$event']) onClick($event) {
    if (this.menu.nativeElement.classList.contains('show')) {
      this.overlay.nativeElement.classList.add('overlay');
      this.mobileMenuIcon.nativeElement.src = '../../assets/images/icon-close-menu.svg';

    } else {
      this.overlay.nativeElement.classList.remove('overlay');
      this.mobileMenuIcon.nativeElement.src = '../../assets/images/icon-hamburger.svg';

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
