import { Component } from "@angular/core";

@Component({
	selector: 'experience',
	templateUrl: './components/developer/experience.component.html',
	styleUrls: ['./../style/developer/experience/experience.component.css','./../style/base.css']
})

export class ExperienceComponent{
	selected_component: string = 'experience';	// distinguishes selected sub-menu item
}