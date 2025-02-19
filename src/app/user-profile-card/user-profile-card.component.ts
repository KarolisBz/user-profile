import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-card',
  imports: [],
  templateUrl: './user-profile-card.component.html',
  styleUrl: './user-profile-card.component.css'
})

export class UserProfileCardComponent {
  user = { name: 'John Smith', email: 'john.smith@example.com', role: 'Admin' };
}
