export default class Vacancies {
  constructor (AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;

  }

  getAllVacancies(status) {

    const _status = (status) ? '/status/' + status : '';

    return this._$http({
      url: `${this._AppConstants.api}/vacancy${_status}`,
      method: 'GET',
    }).then((res) => res.data);
  }
}
