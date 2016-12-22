import { Component } from "@angular/core";

@Component({
	selector: 'developer',
	templateUrl: './components/developer/developer.component.html',
	styleUrls: ['./../style/developer/developer.component.css']
})

export class DeveloperComponent{
	selected_component: string = 'projects';	// distinguishes selected sub-menu item
}