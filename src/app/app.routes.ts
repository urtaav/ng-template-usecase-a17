import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./home/home.component").then((m) => m.HomeComponent)
    },
    {
        path: '',
        component: ContainerComponent,
        children: [
            {
                path: 'conditional',
                loadComponent: () => import("./conditional/conditional.component").then((m) => m.ConditionalComponent)
            },
            {
                path: 'reusable',
                loadComponent: () => import("./reusable/reusable.component").then((m) => m.ReusableComponent)
            },
            {
                path: 'dynamic',
                loadComponent: () => import("./dynamic/dynamic.component").then((m) => m.DynamicComponent)
            },
            {
                path: 'customized',
                loadComponent: () => import("./customized/customized.component").then((m) => m.CustomizedComponent)
            }
        ]
    }
];
