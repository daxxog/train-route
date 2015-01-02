/* TrainRoute / test / basic.js
 * basic test
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var vows = require('vows'),
    assert = require('assert'),
    TrainRoute = require('../train-route.min.js'),
    TrainDestination = require('train-destination');

var VANCOUVER = new TrainDestination('VANCOUVER'),
	SEATTLE = new TrainDestination('SEATTLE');

vows.describe('basic').addBatch({
    'TrainRoute': {
        topic: function() {
        	return TrainRoute;
        },
        'is a function': function(topic) {
            assert.strictEqual(typeof topic, 'function');
        }
    },
    'new TrainRoute(VANCOUVER, SEATTLE, 1)': {
        topic: function() {
        	return new TrainRoute(VANCOUVER, SEATTLE, 1);
        },
        'has .a': function(route) {
            assert.deepEqual(route.a, VANCOUVER._id);
        },
        'has .b': function(route) {
            assert.deepEqual(route.b, SEATTLE._id);
        },
        'has .cars': function(route) {
            assert.strictEqual(route.cars, 1);
        }
    }
}).export(module);