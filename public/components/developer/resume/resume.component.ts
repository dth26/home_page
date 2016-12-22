import { Component } from "@angular/core";

@Component({
	selector: 'resume',
	templateUrl: './components/developer/resume.component.html',
	styleUrls: ['./../style/developer/resume/resume.component.css']
})

export class ResumeComponent{
	selected_component: string = 'resume';	// distinguishes selected sub-menu item
}