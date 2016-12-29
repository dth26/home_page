
import {AppGlobals} from {"../services/globals.service"};
export class GlobalsComponent {
    constructor(private _appGlobals: AppGlobals) {
	  this._appGlobals.selected_sub_menu.subscribe(
	  	(val) => console.log(val)
	  );
	}
}