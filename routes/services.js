var express = require('express');
var router = express.Router();

var templateData = {
	title: 'Services | Chase the Flavors',
  	header: 'Company Services',
  	services: [
  		{
            "name":"Weekly Services",
            "description":"Prepared, convenient, and ready-to-go meals that are prepared, packaged and stored in your refrigerator; all set for your busy work week ahead. Plans usually include six lunches, six dinners, grab-and-go breakfasts, and snacks. Chase the Flavors specializes in fresh, healthy meals without the sacrifice of flavor. These services are affordable and customized for a person just like you.",
            "price_range":"PHP 1,200- PHP 3,000 per week"
        }
  	]
}

/* GET services page. */
router.get('/', function(req, res, next) {
  res.render('services', templateData);
});

module.exports = router;
