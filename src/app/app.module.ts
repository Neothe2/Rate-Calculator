import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CalcPageComponent } from './calc-page/calc-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule, ROUTES } from '@angular/router';
import { AdminGuard } from './core/admin-gaurd';
import { LoginComponent } from './login/login.component';
import { UserGuard } from './core/user.guard';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcPageComponent,
    AdminPageComponent,
    LoginComponent,
    UserManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AdminGuard, UserGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
