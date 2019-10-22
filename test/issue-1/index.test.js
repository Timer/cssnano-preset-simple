describe('issue: 1', () => {
  beforeAll(() => {
    process.env.BROWSERSLIST = `extends browserslist-config-google`
  })
  afterAll(() => {
    process.env.BROWSERSLIST = ''
  })

  beforeEach(() => {
    jest.resetModules()
  })

  test('evaluates without error', () => {
    const mod = require('../..')
    mod()
  })
})
