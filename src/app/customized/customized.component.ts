import { Component } from '@angular/core';
import { CustomExpansionPanelComponent } from './custom-expansion-panel/custom-expansion-panel.component';
import { ExpansionPanelHeaderDirective } from './directive/expansion-panel-header.directive';
import { ExpansionPanelBodyDirective } from './directive/expansion-panel-body.directive';
import { ExpansionPanelHeaderTemplateDirective } from './directive/expansion-panel-header-template.directive';
import { ExpansionPanelBodyTemplateDirective } from './directive/expansion-panel-body-template.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customized',
  standalone: true,
  imports: [
    CommonModule,
    CustomExpansionPanelComponent,
    ExpansionPanelHeaderDirective,
    ExpansionPanelBodyDirective,
    ExpansionPanelHeaderTemplateDirective,
    ExpansionPanelBodyTemplateDirective
  ],
  templateUrl: './customized.component.html',
  styleUrl: './customized.component.css'
})
export class CustomizedComponent {}
