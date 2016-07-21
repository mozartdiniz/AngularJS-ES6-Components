import controller from './vacancy.controller';

const vacancyComponent = {
  restrict: 'E',
  bindings: {
    vacancies: '<'
  },
  templateUrl: 'vacancy/vacancy.html',
  controller,
  controllerAs: '$ctrl'
};

export default vacancyComponent;
