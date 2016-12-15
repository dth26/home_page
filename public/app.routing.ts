import { Routes, RouterModule } from "@angular/router";
import { DeveloperComponent } from "./components/developer/developer.component";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";


const MY_APP_ROUTES : Routes = [
	{ path: '', pathMatch: 'full', component: MainComponent },
	{ path: 'developer', component: DeveloperComponent }
];

export const routing = RouterModule.forRoot(MY_APP_ROUTES);