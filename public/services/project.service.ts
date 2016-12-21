import { Project } from "../components/developer/projects/projects.model";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ProjectService{
	private projects: Project[] = [];

	constructor(private http: Http){}

	addProject(project: Project){
		this.projects.push(project);
		const req_body = JSON.stringify(project);
		const req_header = new Headers({'Content-Type': 'application/json'});
		/*
			this simply sets up an observable and does not actually send the request
			the request is sent when a component subscribes to this observable. check out project.component.ts
		*/
		return this.http.post('http://localhost:3000/data/project', req_body, {headers: req_header}) // return this observable
			.map( (response: Response) => response.json() );			// return response data as json
		//	.catch( (error: Response) => Observable.throw(error.json()) );
	}

	getProjects() {
		return this.http.get('http://localhost:3000/data/projects')
			.map((response: Response) => {
				const projects = response.json().obj;
				let transformedProjects: Project[] = [];
                for (let project of projects) {
                    transformedProjects.push(new Project(
                    	project.name,
                    	project.lng_desc,
                    	project.short_desc,
                    	project.parent_component,
                    	project.github_url,
                    	project.site_url,
                    	project.img_name,
                    	project.technologies
                    ));
                }
                this.projects = transformedProjects;
                return transformedProjects;
			});

			//.catch((error: Response) => Observable.throw(error.json()));
	}
}