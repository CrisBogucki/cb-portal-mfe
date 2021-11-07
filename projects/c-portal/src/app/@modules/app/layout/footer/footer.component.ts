import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input('app-short-name') appShortName: string = '';
  @Input('app-version') appVersion: string = '';
  @Input('app-description') appDescription: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
