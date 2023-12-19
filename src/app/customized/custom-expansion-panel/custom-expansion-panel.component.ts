import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { ExpansionPanelHeaderDirective } from '../directive/expansion-panel-header.directive';
import { ExpansionPanelHeaderTemplateDirective } from '../directive/expansion-panel-header-template.directive';
import { ExpansionPanelBodyDirective } from '../directive/expansion-panel-body.directive';
import { ExpansionPanelBodyTemplateDirective } from '../directive/expansion-panel-body-template.directive';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-custom-expansion-panel',
  standalone: true,
  imports: [NgTemplateOutlet,NgClass],
  templateUrl: './custom-expansion-panel.component.html',
  styleUrl: './custom-expansion-panel.component.css',
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({ height: '0', paddingTop: '0', paddingBottom: '0', opacity: 0 })
      ),
      state(
        'expanded',
        style({ height: '*', paddingTop: '*', paddingBottom: '*', opacity: 1 })
      ),
      transition('collapsed <=> expanded', animate('250ms ease-out'))
    ])
  ]
})
export class CustomExpansionPanelComponent {


  isExpanded = false;

  isCollapsing = false;

  @ContentChild(ExpansionPanelHeaderDirective, { read: TemplateRef }) headerContent?: any;
  @ContentChild(ExpansionPanelHeaderTemplateDirective, { read: TemplateRef }) headerTemplate?: any;
 
  @ContentChild(ExpansionPanelBodyDirective, { read: TemplateRef }) bodyConent?: any;
  @ContentChild(ExpansionPanelBodyTemplateDirective, { read: TemplateRef }) bodyTemplate?: any;

  togglePanel() {

    if (this.isExpanded && !this.isCollapsing) {
      this.isCollapsing = true
    } else {
      this.isExpanded = !this.isExpanded;
      this.isCollapsing = false
    }

  }

  onAnimationEnd($event: any) {

    console.log($event)
    if ($event.toState === "collapsed") {
      this.isCollapsing = false
      this.isExpanded = false
    }

  }

}
