import { Routes } from "@angular/router";
import { ProjectDataComponent } from "./data.project.component";


export const DATA_ROUTES: Routes = [
	{ path: '', redirectTo: 'project', pathMatch: 'full' },
	{ path: 'project', component: ProjectDataComponent }
];