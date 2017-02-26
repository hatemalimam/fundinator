/*
 * Product Component Main Initializer
 * 
 * Author     : hatemalimam
 */
import angular from 'angular';
import { ProductComponent } from './product.component';
import ProductState from './product.state';
import tooltip from './tooltip';
import progressBar from './progress-bar';
import feedback from './feedback';
import giver from './giver';

export default angular.module('product', [tooltip.name, progressBar.name, feedback.name, giver.name])
        .config(config)
        .component(ProductComponent.selector, ProductComponent).factory('ProductState', ProductState);

// optional
/* @ngInject */
function config() {

}