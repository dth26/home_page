import { Component } from "@angular/core";
import { ProjectService } from "../../services/project.service";
import { Project } from "../developer/projects/projects.model";
import { NgForm } from '@angular/forms';

@Component({
	selector: 'project-data',
	template: `
		<div>
			<form (ngSubmit)="onSubmit(f)" #f="ngForm">
				<div class="form-group">
					<label for="name">Name:</label>
					<input type="text" id="name" class="form-control" name="name" [(ngModel)]="name" ngModel required>
				</div>
				<div class="form-group">
					<label for="lng_desc">lng_desc:</label>
					<input type="text" id="lng_desc" class="form-control" name="lng_desc" [(ngModel)]="lng_desc" ngModel required>
				</div>
				<div class="form-group">
					<label for="short_desc">short_desc</label>
					<input type="text" id="short_desc" class="form-control" name="short_desc" [(ngModel)]="short_desc" ngModel required>
				</div>
				<div class="form-group">
					<label for="parent_component">parent_component:</label>
					<input type="text" id="parent_component" class="form-control" name="parent_component" [(ngModel)]="parent_component" ngModel required>
				</div>
				<div class="form-group">
					<label for="github_url">github_url:</label>
					<input type="text" id="github_url" class="form-control" name="github_url" [(ngModel)]="github_url" ngModel required>
				</div>
				<div class="form-group">
					<label for="site_url">site_url</label>
					<input type="text" id="site_url" class="form-control" name="site_url" [(ngModel)]="site_url" ngModel required>
				</div>
				<div class="form-group">
					<label for="technologies">technologies: </label>
					<input type="text" id="technologies" class="form-control" name="technologies" [(ngModel)]="technologies" ngModel required>
				</div>
				<div class="form-group">
					<label for="img_name">img_name</label>
					<input type="text" id="img_name" class="form-control" name="img_name" [(ngModel)]="img_name" ngModel required>
				</div>
				<button class="btn btn-primary" type="submit">Save</button>
			</form>
		</div>
	`,
	providers: [ProjectService]
})



export class ProjectDataComponent {

	/* DEFAULT values */
	name = "tripplanner";
	lng_desc = "trackfinity is a cool music downloading website";
	short_desc = "trackfinity is a downloading music app";
	parent_component = "projects";
	github_url = "http://www.github.com/dth26";
	site_url = "trackfinity.pythonanywhere.com";
	img_name = "stars.png";
	technologies = "python,flask,css,sqlite3,angular";

	constructor(private projectService: ProjectService) {

	}

	onSubmit(form: NgForm){

		console.log('saving ' + form.value.name);
		const project = new Project(form.value.name,
				form.value.lng_desc,
				form.value.short_desc,
				form.value.parent_component,
				form.value.github_url,
				form.value.site_url,
				form.value.img_name,
				form.value.technologies.split(',')
			);

		console.log(project);

		this.projectService.addProject(project)
		.subscribe(
				data => console.log(data),
				error => console.error(error)
			);

		form.resetForm();
	}
}


