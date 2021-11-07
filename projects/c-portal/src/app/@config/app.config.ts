import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class AppConfig {

  constructor() {
    document.title = this.name;
  }

  name = 'Micro app\'s portal';
  short = 'MFEaP';
  description = 'Micro-frontEnd application Portal';
  version = `0.0.1`;
  company = 'cris-bogucki';

}
