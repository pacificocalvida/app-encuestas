import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TribuService {
  private url = 'https://api-encuestas.netlify.app/.netlify/functions/api/';

  constructor(private http: HttpClient) { }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'tribu');
  }

  obtener(id: number): Observable<any> {
    return this.http.get<any[]>(this.url + 'tribu/' + id);
  }
}