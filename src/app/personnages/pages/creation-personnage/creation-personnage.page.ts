import { PersonnageService } from './../../personnage.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Personnage } from 'src/app/models/personnage.model';

@Component({
  selector: 'app-page-creation-personnage',
  templateUrl: './creation-personnage.page.html',
  styleUrls: ['./creation-personnage.page.scss']
})
export class CreationPersonnagePage implements OnInit {

  constructor(private service: PersonnageService, private location: Location) { }

  ngOnInit(): void {
  }

  enregistrerPersonnage(personnage: Personnage): void {
    this.service.create(personnage).subscribe({
      complete: () => this.location.back()
    })
  }

}
