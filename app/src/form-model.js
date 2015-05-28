import {Router} from 'aurelia-router';

export class FormModel {
	static inject = [Router];
	constructor(router){
		this.lastSaved = "";
		this.router = router;
	}
	save(){
		var now = new Date(Date.now());
		this.lastSaved = "Last saved: " + now.toLocaleTimeString();
	}
} 