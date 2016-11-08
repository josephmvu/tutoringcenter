(function() {
    
    'use strict';
    
    // *** dependencies *** //
    const express = require('express');
    
    const appConfig = require('./config/main');
    const routeConfig = require('./config/route');
    const errorConfig = require('./config/error');
    
    // *** express instance *** //
    const app = express();
    
    // *** config *** //
    appConfig.init(express, app);
    routeConfig.init(app);
    errorConfig.init(app);
    
    module.exports = app;
    
})();