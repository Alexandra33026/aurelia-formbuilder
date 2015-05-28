let latency = 0;

let exampleForm = {
	id: "1",
	name: 'Test Form',
	type: 'email',
	emailTo: 'joel.kinzel@wisc.edu',
	emailSubject: 'New Form Builder Version',
	submissionAction: 'standard',
	redirectUrl: 'http://mysite.wisc.edu/thank-you.html',
	displaySettings:{
		columnCount: "2",
		questionAlign: "left", 
		answerAlign: "right",
		displayType: "responsive",
		output: "html" 
	},
	formControls: { 

	}
}

let availableFormWidgets = [{
	type: "text",
	defaultLabelText: "Text Input",
	defaultPlaceholderText: "Type something here...",
},{
	type: "select",
	defaultLabelText: "Dropdown",
	defaultPlaceholderText: "Select one..."
},{
	type: "textarea",
	defaultLabelText: "Textarea",
	defaultPlaceholderText: "Type something here..."
},{
	type: "radio",
	defaultLabelText: "Radio Button",
	defaultPlaceholderText: "",
},{
	type: "checkbox",
	defaultLabelText: "Checkbox",
	defaultPlaceholderText: ""
},{
	type: "button",
	defaultLabelText: "",
	defaultPlaceholderText: "Button Test"
}];

export class WebAPI {
	getExampleForm(){
		return new Promise(resolve => {
			setTimeout(()=>{
				let results = exampleForm;
				resolve(results);
			}, latency);
		});
	}
	getAvailableFormWidgets(){
		return new Promise(resolve => {
			setTimeout(()=>{
				let results = availableFormWidgets;
				resolve(results);
			}, latency);	
		});
	}
}