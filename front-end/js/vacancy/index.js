import angular from 'angular';

// Create the module where our functionality can attach to
let vacancyModule = angular.module('app.vacancy', []);

// Include our UI-Router config settings
import VacancyConfig from './vacancy.config';
vacancyModule.config(VacancyConfig);

// Controllers
import VacancyCtrl from './vacancy.controller';
vacancyModule.controller('VacancyCtrl', VacancyCtrl);

export default vacancyModule;
