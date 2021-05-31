import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TerminosComponent } from './pages/terminos/terminos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'terminos', component: TerminosComponent },
  {path: '**', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }