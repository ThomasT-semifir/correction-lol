import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnagePage } from './personnages/pages/personnage/personnage.page';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'node_modules/primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListePersonnagesComponent } from './personnages/components/liste-personnages/liste-personnages.component';
import { TableModule } from 'primeng/table';
import { CreationPersonnageComponent } from './personnages/components/creation-personnage/creation-personnage.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CreationPersonnagePage } from './personnages/pages/creation-personnage/creation-personnage.page';
import { TestComponent } from './test/test.component';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonnagePage,
    ListePersonnagesComponent,
    CreationPersonnageComponent,
    CreationPersonnagePage,
    TestComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    ColorPickerModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
