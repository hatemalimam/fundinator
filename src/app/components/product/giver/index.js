/*
 * Giver Component Main Initializer
 * 
 * Author     : hatemalimam
 */
import angular from 'angular';
import { GiverComponent } from './giver.component';

export default angular.module('giver', [])
        .component(GiverComponent.selector, GiverComponent);