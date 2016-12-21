import { Component } from "@angular/core";

@Component({
	selector: 'data',
	template: `
		<div class="container" style="width: 80%">
			<div class="row">
				<div class="col-sm-12">
					<router-outlet></router-outlet>
				</div>
			</div>
		</div>
	`,
	styles: [`
		input{
			background-color: rgba('0,0,0,.7');
			border-color: 1px solid #22509b;
		}
	`]
})

export class DataComponent{

}