/*
 * main template file for product component
 * Author     : hatemalimam
 */
import template from './template.html';

class ProductCtrl {
    /* @ngInject */
    constructor(ProductState) {
        //expose injected services/factories to a class methods (make it public)
        Object.assign(this, {productState: ProductState});
    }

    $onInit() {
        //assgin component bindings into productState
        this.productState.title = this.title;
        this.productState.image = this.image;
        this.productState.goal = this.goal;
    }
}

//strict DI
ProductCtrl.$inject = ["ProductState"];

export let ProductComponent = {
    bindings: {
        title: '@',
        image: '@',
        goal: '<'
    },
    selector: 'product',
    template,
    controller: ProductCtrl
};