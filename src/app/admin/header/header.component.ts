import { Component, Input } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';
import * as screenfull from 'screenfull';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'stbui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() customizer: any;
  @Input() sidenav: any;

  isFullscreen = false;
  showLoading: boolean;
  screenfull: screenfull.Screenfull;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.showLoading = false;
      }
    });
  }

  toggleFullscreen() {
    if (this.screenfull.enabled) {
      this.screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }
}
