var k = 10000000
module.exports = {
  pack: function (fix) {
    var buffer = new Buffer(12)
    buffer.fill(0)
    buffer.writeInt32LE(Math.round(k * fix.latitude), 0)
    buffer.writeInt32LE(Math.round(k * fix.longitude), 4)
    buffer.writeInt32LE(fix.timestamp, 8)
    return buffer.toString('base64')
  },
  unpack: function (s) {
    var buffer = new Buffer(s, 'base64')
    return {
      latitude: buffer.readInt32LE(0) / k,
      longitude: buffer.readInt32LE(4) / k,
      timestamp: buffer.readInt32LE(8)
    }
  }
}
