 // Get dependencies 
  const express = require('express');
  const path = require('path');
  const http = require('http');
  const bodyParser = require('body-parser');

  // Get our API routes 
   const api = require('./server/routes/api');

   const app = express();

   // Parsers for POST data 
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: false}));

   //Point static path to dist 
   app.use(express.static(path.join(__dirname, 'dist')));
  
   // Set our api routes 
   app.use('/api', api );

   //catch all other routes and return the index  file
    app.get('*', (req, res ) => {
    	res.sendFile(path.join(__dirname,'dist/index.html'))
    });
 /** 
 * Get port from environment and store in Express
 */
 //const port = process.env.Port || 5000;
 //app.set('port', port);

    /**
    * Create HTTP server.
    */
  //  const server = http.createServer(app);

    /**
    * Listen on provided  port, on all network interfaces.
    */
    //server.listen(port, () => console.log('API is running'));
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => console.log(`API is listening on ${ PORT }`))
     