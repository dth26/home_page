import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from "./shared/header.component";
import { MainComponent } from "./components/main/main.component";
import { TagComponent } from "./components/tags/tags.component";

import { DeveloperComponent } from "./components/developer/developer.component"; 
import { ProjectComponent } from "./components/developer/projects/projects.component";

import { DataComponent } from "./components/dataHelper/data.component";
import { ProjectDataComponent } from "./components/dataHelper/project.component";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		DeveloperComponent,
		ProjectComponent,
		MainComponent,
		TagComponent,
		ProjectDataComponent,
		DataComponent
	],
	imports: [
		routing,
		HttpModule,
		BrowserModule,
		FormsModule
	],
	bootstrap: [AppComponent]
})

export class AppModule {

}