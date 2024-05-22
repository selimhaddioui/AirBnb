import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import {EstateCreationComponent} from "./estate-creation/estate-creation.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'create-estate',
        component: EstateCreationComponent
    }
];
