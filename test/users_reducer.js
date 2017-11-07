const expect = require('chai').expect
const user = require('../src/reducers/User')

describe('User Reducer', () => {
  it('should return null', () => {
    expect(
      user(undefined, { type: "unexpected" })
    ).toEqual(null)
  })
})
