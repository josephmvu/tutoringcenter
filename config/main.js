(function() {
    
    'use strict';
    
    // *** main dependencies *** //
    const path = require('path');
    const logger = require('morgan');
    const bodyParser = require('body-parser');
    
    module.exports.init = function(express, app) {
        
        // *** view engine *** //
        app.set('views', path.join(__dirname, '..', 'views'));
        app.set('view engine', 'ejs');
        
        // *** set static folder *** //
        app.use(express.static(path.join(__dirname, '..', 'public')));
        
        // *** app middleware *** //
        app.use(logger('dev'));
        app.use(bodyParser.urlencoded({extended:true}));
        
    };
    
})();