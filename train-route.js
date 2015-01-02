/* TrainRoute
 * connect point a to point b with x number of cars
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.TrainRoute = factory();
  }
}(this, function() {
    var ObjectID = require('mongodb').ObjectID,
        TrainRoute;
    
    TrainRoute = function(a, b, cars) {
        this.a = a._id;
        this.b = b._id;
        this.cars = cars;
        this._id = new ObjectID();
    };

    return TrainRoute;
}));
