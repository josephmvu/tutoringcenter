(function() {
    
    'use strict';
    
    // get fully configured express app
    const app = require('./app');
    
    // set port
    app.set('port', process.env.PORT || 3000);
    
    app.listen(app.get('port'), () => {
        console.log(`Sever is listening on port ${app.get('port')}`);
    });
    
})();