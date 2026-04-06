import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

<<<<<<< HEAD


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
=======
@Component({
  selector: 'app-root',
  standalone: true, // 👈 IMPORTANTE
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
>>>>>>> 86f023a76ff488390a398c9f923849d2f9312ec8
})
export class App {
  protected readonly title = signal('spaapp-front');
}
