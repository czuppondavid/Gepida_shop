/*
File: api.service.ts
Author: Czuppon David
Copyright: 2025, Czuppon David
Group: Szoft II-2-E
Date: 2025-01-14
Github: https://github.com/czuppondavid
Licenc: nincs
*/



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getBicikl() {
    const url = 'http://localhost:8000/bikes';
    return this.http.get(url);

   /* createBicikl(); {}
    updateBicikl(); {}
    deleteBicikl(); {} */
  }
}

