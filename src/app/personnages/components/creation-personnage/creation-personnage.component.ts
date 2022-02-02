import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Personnage } from 'src/app/models/personnage.model';

@Component({
  selector: 'app-creation-personnage',
  templateUrl: './creation-personnage.component.html',
  styleUrls: ['./creation-personnage.component.scss']
})
export class CreationPersonnageComponent implements OnInit {

  @Output() nouveauPersonnageCree: EventEmitter<Personnage> = new EventEmitter<Personnage>();

  nouveauPersonnage: FormGroup;
  // personnageActif: boolean = false;

  constructor() {
    this.nouveauPersonnage = new FormGroup({
      name: new FormControl(),
      title: new FormControl(),
      active: new FormControl(false)
    })
  }

  ngOnInit(): void {
  }

  sauvegarderPersonnage(): void {
    let keyPersonnage = this.nouveauPersonnage.controls['name'].value.replace(/\s/g, "");
    let nouveauPersonnageComplet = {...this.nouveauPersonnage.value, key: keyPersonnage}
    this.nouveauPersonnageCree.emit(nouveauPersonnageComplet)
  }

  // check() {
  //   this.personnageActif = !this.personnageActif
  // }

}
