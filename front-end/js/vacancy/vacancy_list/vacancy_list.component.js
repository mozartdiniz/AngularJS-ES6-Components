import controller from './vacancy_list.controller';

const vacancyListComponent = {
  restrict: 'E',
  bindings: {
    vacancies: '='
  },
  templateUrl: 'vacancy/vacancy_list/vacancy_list.html',
  controller,
  controllerAs: '$ctrl'
};

export default vacancyListComponent;
