import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-text',
  standalone: true,
  imports: [],
  template:`
  <h4 class="tw-text-sm tw-text-gray-500">{{value}}</h4>
  `
})
export class TemplateTextComponent {
  @Input() value?: any

}
