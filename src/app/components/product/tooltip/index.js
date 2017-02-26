/*
 * Tooltip Component Main Initializer
 * 
 * Author     : hatemalimam
 */
import angular from 'angular';
import { TooltipComponent } from './tooltip.component';

export default angular.module('tooltip', [])
        .component(TooltipComponent.selector, TooltipComponent);