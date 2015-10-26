var
  expect = require('expect.js'),
  ufix = require('./'),
  fix = {
    latitude: 22.331443,
    longitude: 114.1451929,
    timestamp: 1445844471
  },
  s = '/oFPDZksCUT31S1W'

describe('#Ufix', function () {
  it('packs', function () {
    expect(ufix.pack(fix)).to.eql(s)
  })
  it('unpacks', function () {
    expect(ufix.unpack(s)).to.eql(fix)
  })
})
