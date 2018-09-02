import * as R from 'ramda'

export const getRouterMatchParam = (param, props) => R.path(['match', 'params', param], props)
