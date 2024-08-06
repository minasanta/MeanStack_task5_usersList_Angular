import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import data from "../../../../public/assets/users.json"


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatIconModule, NgClass, NgStyle, NgFor, NgIf, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  searchEmail: string = '';
  users: any[] = data
  filteredUsers: any[] = this.users;
  onSearch() {
    if (this.searchEmail) {
      this.filteredUsers = this.users.filter(user => user.email.includes(this.searchEmail));
    } else {
      this.filteredUsers = this.users;
    }
  }

}
