import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {EditmachineComponent} from './components/admin/editmachine/editmachine.component';
import {LoginComponent} from './components/admin/login/login.component';
import {LogoutComponent} from './components/admin/logout/logout.component';
import {DevicenumComponent} from './components/dashboard/devicenum/devicenum.component';
import * as Components from './components/index';
import {ContactComponent} from './components/pages/contact/contact.component';
import {EditComponent} from './components/pages/edit/edit.component';
import {HomeComponent} from './components/pages/home/home.component';
import {IsfilterablePipe} from './components/shared/grid/pipes/isfilterable.pipe';
import {NavigationComponent} from './components/shared/navigation/navigation.component';
import {TabComponent} from './components/shared/tab/tab.component';
import {TabsComponent} from './components/shared/tabs/tabs.component';
import {routerConfig} from './configurations/router.configuration';
import {EmitterService} from './services/emitter.service';
import {MachinedataService} from './services/machinedata.service';

const declarations = [
  Components.DashboardComponent,
  Components.AdminComponent,
  Components.GridComponent,
  IsfilterablePipe,
  DevicenumComponent,
  EditmachineComponent,
  HomeComponent,
  EditComponent,
  ContactComponent,
  NavigationComponent,
  LoginComponent,
  LogoutComponent,
  TabComponent,
  TabsComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...declarations,
  ],
  // dynamically added components (e.g. at runtime)
  entryComponents: [LoginComponent, LogoutComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routerConfig), HttpClientModule],
  // for DI
  providers: [MachinedataService, EmitterService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
