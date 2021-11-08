import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './app/home/home.component';
import {SampleAppRoutingModule} from "./sample-app-routing.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SampleAppRoutingModule
  ]
})
export class SampleAppModule { }
