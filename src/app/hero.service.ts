import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  public getHero(): Observable<any> {
    return this.http.get('https://www.superheroapi.com/api.php/3365683880413232/search/batman')
  }
}
