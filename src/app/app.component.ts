import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crowfunding';
  count = 0;
  path: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.snapshot.url);
    this.path = activatedRoute.snapshot.url[0].path;
    if (this.path === '') {
      this.count++;
    } // array of states
    console.log(activatedRoute.snapshot.url[0].path); }
}
