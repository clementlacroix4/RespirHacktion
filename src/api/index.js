import { HTTP } from '@/http-common'

export const api = {
  // getCompanies: () => { return HTTP.get('/companies/') } EXAMPLE
  getQuestions: (category) => { return HTTP.get('/question', {params: {category: category}}) }
}
