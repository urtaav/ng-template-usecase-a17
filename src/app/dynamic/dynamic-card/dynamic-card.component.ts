import { Component, Input, TemplateRef } from '@angular/core';
import { ModelDynamicItem } from '../types';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-dynamic-card',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './dynamic-card.component.html',
  styleUrl: './dynamic-card.component.css'
})
export class DynamicCardComponent {

  @Input({ required: true }) data?: ModelDynamicItem

  @Input({ required: false }) template?: TemplateRef<any>

}
