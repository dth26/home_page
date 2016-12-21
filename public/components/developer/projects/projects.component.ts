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
	modal_name: string = '';
	modal_lngDesc: string = '';
	modal_technologies: string[] = [];
	modal_site_url: string;
	modal_git_url: string;

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

	openProjectModal(project_index){
		this.modal_name = this.projects[project_index].name;
		this.modal_lngDesc = this.projects[project_index].lng_desc;
		this.modal_technologies = this.projects[project_index].technologies;
		this.modal_site_url = this.projects[project_index].site_url;
		this.modal_git_url = this.projects[project_index].github_url;
		$("#projectModal").modal("show");
	}

}