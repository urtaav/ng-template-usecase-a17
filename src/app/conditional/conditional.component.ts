import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuccessTmplComponent } from './success-tmpl/success-tmpl.component';

@Component({
  selector: 'app-conditional',
  standalone: true,
  imports: [CommonModule, FormsModule,SuccessTmplComponent],
  templateUrl: './conditional.component.html',
  styleUrl: './conditional.component.css'
})
export class ConditionalComponent {
  email?: string;
  password?: string;
  _isNotLoggedIn = true;
  onSubmit = () => {
    // Implement login functionality here
    this.email = ""
    this.password = ""
    this._isNotLoggedIn = false;
  }

  logout = () => {
    this._isNotLoggedIn = true;
  }
}
