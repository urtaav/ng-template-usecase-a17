import { Component } from '@angular/core';
import { ModelDynamicItem } from './types';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';
import { TemplateImageComponent } from './template-image/template-image.component';
import { TemplateInputComponent } from './template-input/template-input.component';
import { TemplateTextComponent } from './template-text/template-text.component';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [DynamicCardComponent,TemplateImageComponent,TemplateInputComponent,TemplateTextComponent],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
  _list: ModelDynamicItem[] = [
    {
      header: "Normal Text",
      valueType: "text",
      value: "template having normal text."
    },
    {
      header: "Input Text",
      valueType: "input",
      value: "input text inside template"
    },
    {
      header: "Image Placeholder",
      valueType: "image",
      value: "https://picsum.photos/500"
    }

  ]


  _onInputChange = ($event: any) => {
    console.log("$event: ", $event)
  }
}
