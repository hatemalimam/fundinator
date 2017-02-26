/*
 * 
 * Author     : hatemalimam
 */
import template from './template.html';

export let FeedbackComponent = {
    selector: 'feedback',
    template,
    controller: class FeedbackCtrl {
        constructor() {            
        }      
    },
    require: {
        parent: '^product'
    }
};