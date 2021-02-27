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
  constructor(private route: Router) {
    route.events.subscribe((url: any) => {
      if (url.toString() === '') {
        console.log(this.count++);
    }});
  }
}
