import { Personnage } from './../../../models/personnage.model';
import { PersonnageService } from './../../personnage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.page.html',
  styleUrls: ['./personnage.page.scss']
})
export class PersonnagePage implements OnInit {

  listePersonnages: Personnage[] = [];
  listePersonnagesFiltree: Personnage[] = this.listePersonnages;

  constructor(private personnageService: PersonnageService) { }

  ngOnInit(): void {
    this.recupererTous();
  }

  private recupererTous() {
    this.personnageService.getAll().subscribe({
      next: (data) => {
        this.listePersonnages = data;
        this.listePersonnagesFiltree = data;
      },
      error: err => console.error(err),
      complete: () => console.log("récupération de tous les personnages terminée")
    });
  }

  filtrerListe(filtre: boolean) {
      this.listePersonnagesFiltree = this.listePersonnages.filter(pers => pers.active === filtre)
  }

  enleverFiltre() {
    this.listePersonnagesFiltree = this.listePersonnages;
  }

  sauvegarderPersonnage(personnage: Personnage): void {
    this.personnageService.create(personnage).subscribe({
      next: (data) => {
        this.recupererTous();
        this.enleverFiltre();
      },
      error: err => console.error(err),
      complete: () => console.log("envoi du personnage effectué")
    })
  }

  supprimerPersonnage(id: number): void {
    this.personnageService.delete(id).subscribe({
      next: () => {
        this.recupererTous();
        this.enleverFiltre();
      },
      error: err => console.error(err),
      complete: () => console.log(`suppression du personnage ${id} terminée`)
    })
  }

  modifierStatutPersonnage(personnage: Personnage): void {
    this.personnageService.modify(personnage).subscribe({
      next: () => {
        this.recupererTous();
        this.enleverFiltre();
      },
      error: err => console.error(err),
      complete: () => console.log(`modification du statut du personnage ${personnage.id} terminée`)
    })
  }

}
