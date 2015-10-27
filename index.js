var k = 10000000
module.exports = function (d) {
  if (typeof d == 'string') {
    var buffer = new Buffer(d, 'base64')
    return {
      latitude: buffer.readInt32LE(0) / k,
      longitude: buffer.readInt32LE(4) / k,
      timestamp: buffer.readInt32LE(8)
    }
  }
  var buffer = new Buffer(12)
  buffer.fill(0)
  buffer.writeInt32LE(Math.round(k * d.latitude), 0)
  buffer.writeInt32LE(Math.round(k * d.longitude), 4)
  buffer.writeInt32LE(d.timestamp, 8)
  return buffer.toString('base64')
}
