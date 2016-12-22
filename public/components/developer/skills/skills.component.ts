import { Component } from "@angular/core";

@Component({
	selector: 'skills',
	templateUrl: './components/developer/skills.component.html',
	styleUrls: ['./../style/developer/skills/skills.component.css','./../style/base.css']
})

export class SkillComponent{
	selected_component: string = 'skills';	// distinguishes selected sub-menu item
}