import angular from 'angular';

// Create the module where our functionality can attach to
let vacancyListModule = angular.module('app.vacancy_list', []);

// Include our UI-Router config settings
import VacancyListConfig from './vacancy_list.config';
vacancyListModule.config(VacancyListConfig);

// Controllers
import VacancyListCtrl from './vacancy_list.controller';
vacancyListModule.controller('VacancyListCtrl', VacancyListCtrl);

// Component
import VacancyListComponent from './vacancy_list.component.js';
vacancyListModule.component('vacancyList', VacancyListComponent);

export default vacancyListModule;
