import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-image',
  standalone: true,
  imports: [],
  template: `
  <div class="tw-aspect-video tw-h-52 tw-flex tw-justify-center tw-items-center">
      <img class="tw-object-cover tw-rounded-xl tw-h-full" [src]="value"/>
  </div>
  `,
  styles:[]
})
export class TemplateImageComponent {
  @Input() value?: any
}
