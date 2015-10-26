Packing GPS fix in 16 chars text string

## Example
```js
var ufix = require('ufix')
ufix.pack({
  latitude: 22.331443,
  longitude: 114.1451929,
  timestamp: 1445844471
})
// returns 16 chars string '/oFPDZksCUT31S1W'
ufix.unpack('/oFPDZksCUT31S1W')
// returns location fix
/*
{
  latitude: 22.331443,
  longitude: 114.1451929,
  timestamp: 1445844471
}
*/
```
