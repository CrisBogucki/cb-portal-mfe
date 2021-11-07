import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { ContainerComponent } from './layout/container/container.component';

// @ts-ignore
//import microAppConfigJson from "./../../../assets/microapp.config.json";

export const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: '**', redirectTo: 'dashboard', pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    SidemenuComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
  ],
  exports: [RouterModule, LayoutComponent, DashboardComponent]
})
export class AppsModule {
}
