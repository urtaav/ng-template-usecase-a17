import { Component } from '@angular/core';
import { ReusableCardComponent } from './reusable-card/reusable-card.component';
import { CommonModule } from '@angular/common';
import { DescriptionDirective } from './description.directive';
import ModelCard from './types';

@Component({
  selector: 'app-reusable',
  standalone: true,
  imports: [CommonModule,ReusableCardComponent,DescriptionDirective],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.css'
})
export class ReusableComponent {
  _model1 : ModelCard=  {
    date: new Date(Date.now()),
    name:"Ankit",
    description :"Text"
  }
  _model3 : ModelCard=  {
    date: new Date(Date.now()),
    name:"Not found",
    description :"..."
  }

  _model2 : ModelCard=  {
    date: new Date(Date.now()),
    name:"Ankit",
    description :"https://picsum.photos/500"
  }

}
