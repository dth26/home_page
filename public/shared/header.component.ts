import { Component } from "@angular/core";

@Component({
	selector: 'app-header',
	template: `
		<!-- <h1><span class="signature">Daniel Hui</span>|Developer</h1> -->
			<table class="name-display">
				<tr>
					<td class="signature">DAN<br/>HUI</td>
					<td>DEVELOPER</td>
				</tr>
			</table>
	`,
	styles: [`
	

	.name-display{
		font-size: 20px;
		margin-top: 30px;
		margin-left: 30px;

	}
	.name-display tr td{
		padding: 0px;
		line-height: 24px;
	}
	.name-display tr td:nth-child(1){
		padding-right: 8px;
		font-size: 30px;
	}
	.name-display tr td:nth-child(2){
		font-size: 58px;
		border-left: 3px solid #545b5a;
		padding-left: 8px;
		color: #545b5a;
		color: #667271;
	}
	`]
})

export class HeaderComponent {

}