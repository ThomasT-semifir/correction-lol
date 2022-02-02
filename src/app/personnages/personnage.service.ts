import { Personnage } from './../models/personnage.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Personnage[]> {
    return this.http.get<Personnage[]>(`${environment.URL}/characters`);
  }

  create(personnage: Personnage): Observable<Personnage> {
    return this.http.post<Personnage>(`${environment.URL}/characters`, personnage)
  }

  delete(id: number): Observable<Personnage> {
    return this.http.delete<Personnage>(`${environment.URL}/characters/${id}`)
  }

  modify(personnage: Personnage): Observable<Personnage> {
    return this.http.put<Personnage>(`${environment.URL}/characters/${personnage.id}`, personnage)
  }
}
