var express = require('express');
var jobsApi = require('./JobsApi');

//---- WebJCL Production API ------------------------------------------
var WebJCLExpressApp = express();

// Jobs API
WebJCLExpressApp.use('/webjcl/v2', jobsApi); 

// Default action
WebJCLExpressApp.use('/', function (req, res) {
    res.send(404);
});
//---------------------------------------------------------------------

module.exports = WebJCLExpressApp;
