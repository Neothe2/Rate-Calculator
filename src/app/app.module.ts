import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CalcPageComponent } from './calc-page/calc-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule, ROUTES } from '@angular/router';

@NgModule({
  declarations: [AppComponent, CalcPageComponent, AdminPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
