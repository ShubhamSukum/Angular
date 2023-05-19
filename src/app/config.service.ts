import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';

export interface Config {
  userName: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url = "http://localhost:3001"
  constructor(private http: HttpClient) {

  }

  getConfig() {
    return this.http.get<Config[]>(this.url)
    .pipe(retry(3))
  }

}
