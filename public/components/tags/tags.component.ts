import { Component } from "@angular/core";
import { Tag } from "./tag.model";

@Component({
	selector: 'tags',
	templateUrl: './components/tags/tags.component.html',
	styleUrls: ['./../style/tags/tags.component.css']
})



export class TagComponent {


	MIN_TAG_FONT_SIZE: number = 13;
	words = ['Java','cooking','woodworking','resume','web development','shiba inu','projects','devops','guitar','HTML','PNC'];
	tags : Tag[] = [];

	constructor(){
			
		for(var i=0; i<this.words.length; i++){
			var random_font_size: string = this.MIN_TAG_FONT_SIZE +  Math.floor(Math.random()*7) + 'px';
			var tag = new Tag(this.words[i], random_font_size,'/');
			this.tags.push(tag);
		}
	
	}
	
}












