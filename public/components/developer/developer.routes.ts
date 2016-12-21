import { Routes } from "@angular/router";
import { ProjectComponent } from "./projects/projects.component";


export const DEV_ROUTES: Routes = [
	{ path: '', redirectTo: 'projects', pathMatch: 'full' },
	{ path: 'projects', component: ProjectComponent }
];