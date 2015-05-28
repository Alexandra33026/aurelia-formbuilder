import {WebAPI} from './web-api';

export class FormToolbox{
	static inject = [WebAPI];
	constructor(api){
		this.items = []; 
		this.api = api;
	}
	attached(){
		this.api.getAvailableFormWidgets().then(availableFormWidgets => {
			this.items = availableFormWidgets;  
		});
	}
	alertIndex(val){
		alert(val);
	}
}