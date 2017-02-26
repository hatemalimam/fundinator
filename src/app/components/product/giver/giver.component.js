/*
 * 
 * Author     : hatemalimam
 */
import template from './template.html';

export let GiverComponent = {
    selector: 'giver',
    template,
    controller: class GiverCtrl {
        constructor() {
           
        }       

        //update productState based on the donated amount
        donate() {
            this.parent.productState.currentDonation = this.parent.productState.currentDonation + Number(this.donatedAmout);
            this.parent.productState.currentDoners = this.parent.productState.currentDoners + 1;            
            this.parent.productState.progress = this.calculateProgress();            
            this.donatedAmout = null;
        }

        calculateProgress() {
            const percentage = Math.round(this.parent.productState.currentDonation / this.parent.productState.goal * 100);
            return (percentage > 100) ? 100 : percentage;
        }
    },
    //access to parent (product)
    require: {
        parent: '^product'
    }
};