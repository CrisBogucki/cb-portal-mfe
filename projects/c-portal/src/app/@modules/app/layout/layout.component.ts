import {Component, OnInit} from '@angular/core';
import {AppConfig} from "../../../@config/app.config";

@Component({
  selector: 'app-layout',
  template: `
    <app-navbar
      [app-name]="appCfg.name"
    ></app-navbar>
    <app-container>
      <router-outlet></router-outlet>
    </app-container>
    <app-footer
      [app-short-name]="appCfg.short"
      [app-description]="appCfg.description"
      [app-version]="appCfg.version"
    ></app-footer>
  `
})
export class LayoutComponent implements OnInit {

  constructor(public appCfg: AppConfig) {
  }

  ngOnInit(): void {
  }

}
