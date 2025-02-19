import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications = [{ message: 'New message from support.', read: false },
    { message: 'System update available.', read: true },
    { message: 'Password changed successfully.', read: true }];
}
