import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  constructor(private location: Location) {
  }
  _onBackPress() {
    this.location.back()
  }
}
