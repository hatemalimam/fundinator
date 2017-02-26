/*
 * 
 * Author     : hatemalimam
 */
import template from './template.html';

export let TooltipComponent = {
    selector: 'tooltip',
    template,
    controller: class TooltipCtrl {
        constructor() {

        }      
    },
    //access to parent (product)
    require: {
        parent: '^product'
    }
};