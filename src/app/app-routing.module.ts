import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlValidationComponent } from './pages/form-control-validation/form-control-validation.component';
import { HomeComponent } from './pages/home/home.component';
import { TemplateDrivenValidationComponent } from './pages/template-driven-validation/template-driven-validation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'template-driven', component: TemplateDrivenValidationComponent },
  { path: 'reactive-form-control', component: FormControlValidationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
