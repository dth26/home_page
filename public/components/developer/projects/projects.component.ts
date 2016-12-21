import { Component } from "@angular/core";
import { ProjectService } from "../../../services/project.service";
import { Project } from "./projects.model";

@Component({
	selector: 'projects',
	templateUrl: './components/developer/projects/projects.component.html',
	styleUrls: ['./style/developer/projects/projects.component.css'],
	providers: [ProjectService]
})

export class ProjectComponent{

	projects: Project[] = [];

	constructor(private projectService: ProjectService){
	
	}

	ngOnInit() {
		this.projectService.getProjects()
			.subscribe(
				(projects: Project[]) => {
                    this.projects = projects;
                }
			);		
	}


}