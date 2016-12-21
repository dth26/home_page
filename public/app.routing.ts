import { Routes, RouterModule } from "@angular/router";
import { DeveloperComponent } from "./components/developer/developer.component";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";
import { DEV_ROUTES } from "./components/developer/developer.routes";
import { DATA_ROUTES } from "./components/dataHelper/data.routes";
import { DataComponent } from "./components/dataHelper/data.component";

const MY_APP_ROUTES : Routes = [
	{ path: '', pathMatch: 'full', component: MainComponent },
	{ path: 'developer/projects', component: DeveloperComponent, children: DEV_ROUTES },
	{ path: 'developer', component: DeveloperComponent, children: DEV_ROUTES },
	{ path: 'create', component: DataComponent, children: DATA_ROUTES }
];

export const routing = RouterModule.forRoot(MY_APP_ROUTES);