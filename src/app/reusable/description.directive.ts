import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDescription]',
  standalone: true
})
export class DescriptionDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    // Acceder al contenido proyectado
    const projectedContent = this.templateRef.elementRef.nativeElement.innerHTML;

    // Hacer algo con el contenido (por ejemplo, imprimirlo en la consola)
    console.log('Contenido Proyectado:', projectedContent);
  }

}
