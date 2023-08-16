import config from '../config.json'

export const environment = {
  production: false,
  status: config.status,
  environmentName: config.environmentName
}
