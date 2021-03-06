const fieldResolvers = {
  activities: require('./activities'),
  areaOfBenefit: require('./areaOfBenefit'),
  areas: require('./areas'),
  beneficiaries: require('./beneficiaries'),
  causes: require('./causes'),
  contact: require('./contact'),
  finances: require('./finances'),
  financialYearEnd: require('./financialYearEnd'),
  geo: require('./geo'),
  governingDoc: require('./governingDoc'),
  grants: require('./grants'),
  id: require('./id'),
  name: require('./name'),
  names: require('./names'),
  numPeople: require('./numPeople'),
  objectives: require('./objectives'),
  operations: require('./operations'),
  orgIds: require('./orgIds'),
  registrations: require('./registrations'),
  website: require('./website'),
}

module.exports = fieldResolvers
