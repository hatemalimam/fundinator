/*
 * 
 * Author     : hatemalimam
 */
import template from './template.html';

export let ProgressBarComponent = {
    selector: 'progressBar',
    template,    
    controller: class ProgressBarCtrl {
        constructor() {

        }      
    },
    require: {
        parent: '^product'
    }
};