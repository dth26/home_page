import { Component, AfterViewInit, ViewChild, ElementRef, Renderer } from "@angular/core";

@Component({
	selector: 'app-header',
	template: `
		
		<div id="navbar">
			<img src="icons/dan2.png" alt="Daniel Hui" class=""/>
		<!--
			<div id="col-1">DAN<br>HUI</div>
			<div id="col-2">DEVELOPER</div>
		-->
		</div>

		<br> <br> <br> <br> <br> 
	`,
	styleUrls: ['./../style/shared/header.component.css']
})

export class HeaderComponent implements AfterViewInit{

	@ViewChild('navbar') el:ElementRef;

	constructor (private rd: Renderer) {

		
	}

	ngAfterViewInit() {
			console.log(document.getElementById('navbar').clientHeight);
	//	var navbar_height = this.el.nativeElement.style.height;
    //	console.log(navbar_height);
    }
}