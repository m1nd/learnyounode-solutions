const fs = require('fs');
const path = require('path');

module.exports = function (dirName, ext, callback) {
    fs.readdir(dirName, function (err, list) {
    if (err) {
        return callback(err);
    }
    list = list.filter(function (value) {
        return path.extname(value) === `.${ext}`;
    });
    callback(null, list);    
});
}