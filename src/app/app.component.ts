import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crowfunding';
  count = 0;
  path: string;
  url: Observable<string>;
  constructor(private router: Router, private route: ActivatedRoute) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    this.url = route.url.pipe(map(segments => segments.join('')));
  }

  ngOnInit() {
  const urld = this.url.subscribe(d => d ? this.count++ : null);
  console.log(urld);

  }

}
