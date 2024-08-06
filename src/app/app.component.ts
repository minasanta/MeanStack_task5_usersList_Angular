import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from "./components/users/users.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usersList';
}
