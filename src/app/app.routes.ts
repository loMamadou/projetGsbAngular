import { Routes } from '@angular/router';
import {ListeFraisComponent} from "./frais/liste-frais/liste-frais.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'frais/liste', component: ListeFraisComponent},
    { path: 'home', component: HomeComponent }

];



