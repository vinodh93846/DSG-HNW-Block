let express = require('express');
let router = express.Router();
let main = require('./controller.js');
let format = require('date-format');

module.exports = router;

router.use(function(req, res, next) {

  console.log(format.asString('hh:mm:ss.SSS', new Date())+'::............ '+req.url+' .............');
  next(); // make sure we go to the next routes and don't stop here

  function afterResponse() {
      res.removeListener('finish', afterResponse);          
  }    
  res.on('finish', afterResponse);

});

router.get('/getBuy',main.getBuy)
router.get('/getBuyList',main.getBuyList)
router.get('/queryBuy',main.queryBuy)
router.post('/createBuy*', main.createBuy);







