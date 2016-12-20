import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from "./shared/header.component";
import { MainComponent } from "./components/main/main.component";
import { TagComponent } from "./components/tags/tags.component";

import { DeveloperComponent } from "./components/developer/developer.component"; 
import { ProjectComponent } from "./components/developer/projects/projects.component";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		DeveloperComponent,
		ProjectComponent,
		MainComponent,
		TagComponent
	],
	imports: [
		routing,
		HttpModule,
		BrowserModule
	],
	bootstrap: [AppComponent]
})

export class AppModule {

}