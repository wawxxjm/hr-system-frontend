import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { HRComponentComponent } from './components/hrcomponent/hrcomponent.component';



const routes: Routes = [
  { path: 'onboardingform', component: HRComponentComponent},
  { path: '**', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
