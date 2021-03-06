const getIdFilters = require('./id')
const getAreasFilters = require('./areas')
const getGrantsFilters = require('./grants')
const getCausesFilters = require('./causes')
const getBeneficiariesFilters = require('./beneficiaries')
const getOperationsFilters = require('./operations')
const getGeoFilters = require('./geo')
const getFinancesFilters = require('./finances')
const getRegistrationsFilters = require('./registrations')
const getSearchFilters = require('./search')

const getElasticQuery = ({
  id,
  search,
  areas,
  grants,
  causes,
  beneficiaries,
  operations,
  geo,
  finances,
  registrations,
}) => {
  const must = [
    ...getSearchFilters(search),
  ]

  const filter = [
    ...getIdFilters(id),
    ...getAreasFilters(areas),
    ...getGrantsFilters(grants),
    ...getCausesFilters(causes),
    ...getBeneficiariesFilters(beneficiaries),
    ...getOperationsFilters(operations),
    ...getGeoFilters(geo),
    ...getFinancesFilters(finances),
    ...getRegistrationsFilters(registrations),
  ]

  return {
    bool: {
      must,
      filter,
    }
  }
}

module.exports = getElasticQuery
