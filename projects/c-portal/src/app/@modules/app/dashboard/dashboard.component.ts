import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

// @ts-ignore
import MicroAppConfigJson from './../../../../assets/microapp.config.json';
import {MicroAppConfig} from "../../../@config/microapp.config";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  microApps: MicroAppConfig[] = [];
  microAppConfigJson: any;

  constructor() {
  }

  ngOnInit() {
    this.readJson();
    this.microAppConfigJson = MicroAppConfigJson;
    console.log(this.microAppConfigJson);
  }

  readJson(){
    this.microApps = MicroAppConfigJson.map((cfg: MicroAppConfig) => (cfg));
  }


}
