import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Injectable } from "@angular/core";


@Injectable() 
export class GlobalService {
// use this property for property binding
  public selected_sub_menu:BehaviorSubject<string> = new BehaviorSubject<string>(null);

  setSubMenuItem(next_selected_sub_menu:string){
   this.selected_sub_menu.next(next_selected_sub_menu);
  }
}





