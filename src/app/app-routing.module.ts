import { CreationPersonnagePage } from './personnages/pages/creation-personnage/creation-personnage.page';
import { PersonnagePage } from './personnages/pages/personnage/personnage.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "personnages", component: PersonnagePage},
  { path: "creation", component: CreationPersonnagePage},
  { path: "", redirectTo: "/personnages", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
