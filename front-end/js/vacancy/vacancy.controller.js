class VacancyCtrl {
  constructor(AppConstants, $stateParams, Vacancies) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.vacancies = [];
    this.VacanciesService = Vacancies;
    this.getAllVacancies();
  }

  getAllVacancies() {
    this.VacanciesService.getAllVacancies(this.$stateParams.status).then((data) => this.vacancies = data);
  }

}

export default VacancyCtrl;
