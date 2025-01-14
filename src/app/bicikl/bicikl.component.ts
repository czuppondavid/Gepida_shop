/*
File: bicikl.component.ts
Author: Czuppon David
Copyright: 2025, Czuppon David
Group: Szoft II-2-E
Date: 2025-01-14
Github: https://github.com/czuppondavid
Licenc: nincs
*/


import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-bicikl',
  standalone: true,
  imports: [],
  templateUrl: './bicikl.component.html',
  styleUrl: './bicikl.component.css'
})
export class BiciklComponent {
  biciklList: any[] = [];

  constructor(private api: ApiService) {}
 
  ngOnInit(){
    this.getBicikl()
  }
  getBicikl() {
    this.api.getBicikl().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('Hiba történt:', error);
      }
    });
  }
}



