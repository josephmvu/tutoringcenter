(function() {
    
    'use strict';
    
    module.exports.init = function(app) {
        
        // *** routes *** //
        const indexRoutes = require('../routes/index');
        // const studentRoutes = require('../routes/students');
        
        // *** register routes *** //
        app.use('/', indexRoutes);
        // app.use('/students', studentRoutes);
        
    };
    
})();