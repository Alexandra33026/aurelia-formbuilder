import {FormModel} from './form-model';
import $ from 'jquery';

export class FooterBar {
	static inject = [FormModel];
	constructor(form){
		this.form = form;
	}
	saveForm(closeFormBuilder){
		this.form.save();
		if(closeFormBuilder){
			self.close();
		}
	}
}