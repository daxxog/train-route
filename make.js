/* TrainRoute / make.js
 * echo 'make script for TrainRoute' && node make
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var bitfactory = require('bitfactory'),
    UglifyJS = require("uglify-js"),
    stoptime = require('stoptime'),
    fs = require('fs');

var watch = stoptime(),
    header = '';

bitfactory.make({ //routes
    "": function(err, results) {
        console.log('built TrainRoute in ' + watch.elapsed() + 'ms.');
    }
}, { //dependencies
    "*": { //wildcard
        "header": function(cb) {
            fs.readFile('train-route.h', 'utf8', function(err, data) {
                header = data;
                cb(err);
            });
        },
        "train-route.min.js": ["header", function(cb) {
            fs.writeFileSync('train-route.min.js', header + UglifyJS.minify('train-route.js').code);
            cb();
        }]
    }
});