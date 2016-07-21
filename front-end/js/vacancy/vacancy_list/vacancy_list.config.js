function VacancyListConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.vacancy_list', {
    url: '/vacancy_list',
    controller: 'VacancyListCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'vacancy/vacancy_list/vacancy.html',
    title: 'VacancyList'
  })

};

export default VacancyListConfig;
