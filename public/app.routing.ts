import { Routes, RouterModule } from "@angular/router";
import { DeveloperComponent } from "./components/developer/developer.component";
import { AppComponent } from "./app.component";


const MY_APP_ROUTES : Routes = [
	{ path: '', redirectTo: '/developer', pathMatch: 'full'},
	{ path: 'developer', component: DeveloperComponent }
];

export const routing = RouterModule.forRoot(MY_APP_ROUTES);