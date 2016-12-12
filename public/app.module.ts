import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
//import { DeveloperComponent } from './components/developer/developer.component'; 

@NgModule({
	declarations: [
		AppComponent
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