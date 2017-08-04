/**
 * @Stake v3
 * Developed by Engagement Lab, 2016-2017
 * ==============
 * Common game socket handler.
 *
 * @class sockets/handlers
 * @static
 * @author Johnny Richardson
 *
 * ==========
 */

var Common = function (nsp, socket) {
    var currentSpace = nsp,
        currentSocket = socket, 
        appRoot = require('app-root-path');

    // Expose handler methods for events
    this.handler = {

        'connect': function(package) {

            console.log('connected back end');
            
        },

        'disconnect': function(package) {

            console.log('disconnect back end');

        }
    };
}

module.exports = Common;