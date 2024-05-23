import { Routes } from '@angular/router';
import { EstatesComponent } from './estates/estates.component';
import { DetailsComponent } from './details/details.component';
import {EstateCreationComponent} from "./estate-creation/estate-creation.component";
import {RentsComponent} from "./rents/rents.component";

export const routes: Routes = [
    {
        path: '',
        component: EstatesComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
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
