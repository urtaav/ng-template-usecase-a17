import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { DescriptionDirective } from '../description.directive';
import { DatePipe, NgTemplateOutlet, SlicePipe } from '@angular/common';
import ModelCard from '../types';

@Component({
  selector: 'app-reusable-card',
  standalone: true,
  imports: [DatePipe,SlicePipe,NgTemplateOutlet],
  templateUrl: './reusable-card.component.html',
  styleUrl: './reusable-card.component.css'
})
export class ReusableCardComponent {
  @Input() model?: ModelCard 
  
  @ContentChild(DescriptionDirective, {read: TemplateRef}) cardDescriptionTemplate?: any;
}
