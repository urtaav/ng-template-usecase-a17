import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-input',
  standalone: true,
  imports: [CommonModule,FormsModule],
  template: `
  <textarea class="tw-rounded-md tw-w-full tw-bg-transparent tw-outline tw-outline-1 tw-p-2 tw-outline-slate-400 focus-visible:tw-outline-slate-500"  [(ngModel)]="value" (ngModelChange)="onChange($event)"></textarea>
  
           `
})
export class TemplateInputComponent {
  @Input() value: any
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  onChange($event: any) {
    this.valueChange.emit($event)
  }
}
