import {WebAPI} from './web-api';

export class Index{
	static inject = [WebAPI]
  	constructor(api){
  		this.api = api;
  		this.form = {};
  	}
  	activate(){
		this.api.getExampleForm().then(exampleForm => {
			this.form = exampleForm;
		});
	}
	toggleToolbox(){
		var toolboxPanel = document.querySelector('.form-toolbox-panel');
        if(! toolboxPanel.classList.contains("open")){
            toolboxPanel.classList.add('open');
            toolboxPanel.classList.remove('closed');
        }
        else if(toolboxPanel.classList.contains("open")){
            toolboxPanel.classList.remove('open');
            toolboxPanel.classList.add('closed');
        }
	}
  dragEnter(){
    console.log('dragenter');
  }
  dragOver(e){
    console.log('dragover');
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'copy';
  }
}