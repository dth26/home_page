import { Routes } from "@angular/router";
import { ProjectComponent } from "./projects/projects.component";
import { SkillComponent } from "./skills/skills.component";
import { ResumeComponent } from "./resume/resume.component";
import { ExperienceComponent } from "./experience/experience.component";

export const DEV_ROUTES: Routes = [
	{ path: '', redirectTo: 'skills', pathMatch: 'full' },
	{ path: 'projects', component: ProjectComponent },
	{ path: 'skills', component: SkillComponent },
	{ path: 'resume', component: ResumeComponent },
	{ path: 'experience', component: ExperienceComponent }

];