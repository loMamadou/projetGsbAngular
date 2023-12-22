import { Routes } from '@angular/router';
import {ListeFraisComponent} from "./frais/liste-frais/liste-frais.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [

    {path: 'frais/liste', component: ListeFraisComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];



