const expect = require('chai').expect
const User = require('../src/reducers/User.js')


describe('User Reducer', () => {
  it('should return null', () => {
    expect(
      User.default(undefined, { type: "unexpected" })
    ).equal(null)
  })
})
