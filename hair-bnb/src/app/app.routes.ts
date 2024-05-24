import { Routes } from '@angular/router';
import { EstatesComponent } from './estates/estates.component';
import { EstateCreationComponent } from "./estate-creation/estate-creation.component";
import { RentsComponent } from "./rents/rents.component";

export const routes: Routes = [
    {
        path: '',
        component: EstatesComponent
    },
    {
        path: 'create-estate',
        component: EstateCreationComponent
    },
    {
        path: 'reservations',
        component: RentsComponent
    }
];
