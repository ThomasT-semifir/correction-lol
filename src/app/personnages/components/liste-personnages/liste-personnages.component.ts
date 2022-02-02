import { Personnage } from './../../../models/personnage.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste-personnages',
  templateUrl: './liste-personnages.component.html',
  styleUrls: ['./liste-personnages.component.scss']
})
export class ListePersonnagesComponent implements OnInit {

  @Input() listePersonnages: Personnage[] = []
  @Output() personnageSupprime: EventEmitter<number> = new EventEmitter<number>();
  @Output() statutPersonnageChange: EventEmitter<Personnage> = new EventEmitter<Personnage>();
  
  constructor() { }

  ngOnInit(): void {
  }

  supprimerPersonnage(id: number): void {
    this.personnageSupprime.emit(id);
  }

  changementStatut(personnage: Personnage) {
    this.statutPersonnageChange.emit(personnage)
  }

}
