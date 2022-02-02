import { PersonnagePage } from './personnages/pages/personnage/personnage.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "personnages", component: PersonnagePage},
  { path: "", redirectTo: "/personnages", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
