function VacancyConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('app.vacancy', {
      url: '/vacancy/:status',
      controller: 'VacancyCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'vacancy/vacancy.html',
      title: 'Vacancy'
    });

};

export default VacancyConfig;
