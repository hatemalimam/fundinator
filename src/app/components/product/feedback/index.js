/*
 * Feedback Component Main Initializer
 * 
 * Author     : hatemalimam
 */
import angular from 'angular';
import { FeedbackComponent } from './feedback.component';

export default angular.module('feedback', [])
        .component(FeedbackComponent.selector, FeedbackComponent);