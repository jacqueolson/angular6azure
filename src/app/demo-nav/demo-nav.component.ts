import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-demonav',
  templateUrl: './demo-nav.component.html',
  styleUrls: ['./demo-nav.component.css']
})
export class DemoNavComponent implements OnInit {

  private _isLoggedIn = new BehaviorSubject<boolean>(false);

  @Input()
  set isLoggedIn(value) {
    this._isLoggedIn.next(value);
  }
  get isLoggedIn() {
    return this._isLoggedIn.getValue();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this._isLoggedIn.subscribe(x => this.isLoggedIn);
  }
}
