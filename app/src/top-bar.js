import {FormModel} from './form-model';
import {Router} from './aurelia-router';

export class TopBar {
	static inject = [FormModel, Router];
	constructor(form, router){
		this.router = router;
		this.form = form;
		this.lastSaved = form.lastSaved;
	}
	saveForm(){
		this.form.save();
	}	
}