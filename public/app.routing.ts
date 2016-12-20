import { Routes, RouterModule } from "@angular/router";
import { DeveloperComponent } from "./components/developer/developer.component";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";
import { DEV_ROUTES } from "./components/developer/developer.routing.ts";


const MY_APP_ROUTES : Routes = [
	{ path: '', pathMatch: 'full', component: MainComponent },
	{ path: 'developer', component: DeveloperComponent, children: DEV_ROUTES }
];

export const routing = RouterModule.forRoot(MY_APP_ROUTES);