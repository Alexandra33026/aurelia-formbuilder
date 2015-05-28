import {WebAPI} from './web-api';
import {FormModel} from './form-model';

export class FormSettings {
	static inject = [WebAPI, FormModel];
	constructor(api, form) {
		this.api = api;
		this.form = {};
	}

	activate(){
		this.api.getExampleForm().then(exampleForm => {
			this.form = exampleForm;
		});
	}

}