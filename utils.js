var glob = require('glob')
var path = require('path')

module.exports = {
  resolve: function (dir) {
    return path.join(__dirname, '.', dir)
  },
  getEntry: function (globPath) {
    var entries = {}
    glob.sync(globPath).forEach(entry => {
      console.log(entry)
      let tmp = entry.split('/').splice(-4)
      basename = tmp[tmp.length - 2]
      if (basename.indexOf('RN') >=0 ) {
        return
      }
      if (basename === 'src') {
        entries[`index`] = entry
      } else {
        entries[`${basename}/index`] = entry
      }
    })
    return entries
  }
}
