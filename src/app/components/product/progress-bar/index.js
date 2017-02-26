/*
 * ProgressBar Component Main Initializer
 * 
 * Author     : hatemalimam
 */
import angular from 'angular';
import { ProgressBarComponent } from './progress-bar.component';

export default angular.module('progress-bar', [])
        .component(ProgressBarComponent.selector, ProgressBarComponent);