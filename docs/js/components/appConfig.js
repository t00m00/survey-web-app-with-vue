import config from './../../survey.config.js'

const appConfig = new class {
  constructor() {
  }

  get assessments() {
    return config.assessments
  }
}

export default appConfig