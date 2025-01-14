import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { BiciklComponent } from './bicikl/bicikl.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BiciklComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bicikli';
}
