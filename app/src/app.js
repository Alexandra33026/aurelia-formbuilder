import {WebAPI} from './web-api';
import {FormModel} from './form-model';

export class App {
	static inject= [WebAPI, FormModel];

	constructor(api, form){
		this.api = api;
		this.form = form;
	}

  	configureRouter(config, router){
    	this.router = router;
    	config.title = 'Form Builder';
    	config.map([
    		  { route: '',			   redirect: 'settings'																		                             },
      		{ route: 'edit', 		 moduleId: './edit',				  nav: true,  title: "Edit Form",		  name: 'edit' 		   },
      		{ route: 'settings', moduleId: './form-settings', nav: true,  title: 'Form Settings', name: 'settings'	 }
    	]);
  	}
}
