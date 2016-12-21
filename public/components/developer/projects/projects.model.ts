

export class Project {
	name: string;
	lng_desc: string;
	short_desc: string;
	parent_component: string;
	github_url: string;
	site_url: string;
	img_name: string;
	technologies: string[];

	constructor(name: string, lng_desc: string, short_desc: string, parent_component: string, github_url: string, site_url: string, img_name: string, technologies: string[]) {
		this.name = name;
		this.lng_desc = lng_desc;
		this.short_desc = short_desc;
		this.parent_component = parent_component;
		this.github_url = github_url;
		this.site_url = site_url;
		this.img_name = img_name;
		this.technologies = technologies;
	} 
}