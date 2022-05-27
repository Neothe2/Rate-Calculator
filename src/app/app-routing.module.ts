import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CalcPageComponent } from './calc-page/calc-page.component';

const routes: Routes = [
  { path: 'admin', component: AdminPageComponent },
  { path: '', component: CalcPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
